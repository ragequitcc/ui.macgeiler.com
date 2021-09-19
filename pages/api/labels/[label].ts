import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import fs from 'fs';

const labels = [
  'monthly_top_cheers',
  'monthly_top_donations',
  'monthly_top_sub_gifter',
];

const getAndSortFiles = (labelPath: string) => {
  const allFiles = fs.readdirSync(labelPath, 'utf-8');

  return allFiles.filter((label) => {
    const b = label.slice(0, label.length - 4);
    if (labels.includes(b)) {
      return b;
    }
  });
};

const formatLabels = (label: string, rawLabels: string[]) => {
  // remove leading whitespace
  const labels = rawLabels.map((label) => {
    return label.trim();
  });

  // sub gifter format
  if (label === 'monthly_top_sub_gifter') {
    return labels.map((rawLabel) => {
      const label = rawLabel.split(' ');
      return {
        name: label[0],
        gifts: label[2],
      };
    });
  }
  // donations format

  if (label === 'monthly_top_donations') {
    return labels.map((rawLabel) => {
      const label = rawLabel.split(':');

      return {
        name: label[0],
        amount: label[1].trim(),
      };
    });
  }

  // cheers format
  if (label === 'monthly_top_cheers') {
    return labels.map((rawLabel) => {
      const label = rawLabel.split(':');
      return {
        name: label[0],
        amount: label[1].trim(),
      };
    });
  }
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { label } = req.query;
  const config = await prisma.config.findFirst();
  const labelPath = config?.labelPath;

  if (label === 'all') {
    return res.json(getAndSortFiles(labelPath));
  }

  if (!labels.includes(label)) {
    return res.status(404).json({
      error: 'Label Not Found',
    });
  }

  const labelContent = fs.readFileSync(`${labelPath}/${label}.txt`, 'utf-8');

  return res.json(formatLabels(label, labelContent.split(',')));
}
