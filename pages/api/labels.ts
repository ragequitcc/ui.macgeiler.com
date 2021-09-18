import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import fs from "fs";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.label) {
    return res.json({
      error: "No Label In Query Found",
    });
  }

  const config = await prisma.config.findFirst();

  const labelPath = config?.labelPath;

  if (!labelPath) {
    process.exit();
  }

  const allFiles = fs.readdirSync(labelPath, "utf-8");

  const labelFilter = (value: string) => {
    if (value.startsWith("monthly") || value.startsWith("all")) return value;
  };

  const file = allFiles
    .filter(labelFilter)
    .filter((label) => label.slice(0, label.length - 4) === req.query.label);

  // check if file even exists
  if (file.length === 0) {
    return res.json({
      error: `Label Not Found.`,
    });
  } else {
    // read file content
    const content = fs.readFileSync(`${labelPath}/${file[0]}`, "utf-8");

    // decide if content has ",", if yes: it's a leaderboard.
    if (content.includes(",")) {
      return res.status(200).json(content.split(","));
    } else {
      res.status(200).json({
        data: content,
      });
    }
  }
}
