import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const config = await prisma.config.findFirst();
    return res.json(config);
  }

  if (req.method === "POST") {
    const { labelPath, streamlabsApiKey } = req.body;

    if (!labelPath || !streamlabsApiKey) {
      return res.json({
        error: "Missing Data",
      });
    } else {
      const config = await prisma.config.upsert({
        where: {
          id: 1,
        },
        update: {
          labelPath: labelPath.toString(),
          streamlabsApiKey: streamlabsApiKey.toString(),
        },
        create: {
          labelPath: labelPath.toString(),
          streamlabsApiKey: streamlabsApiKey.toString(),
        },
      });

      return res.json(config);
    }
  }
}
