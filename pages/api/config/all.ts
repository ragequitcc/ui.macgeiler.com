import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const Config = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.config.findMany();

  if (result === null) {
    return res.status(400).json({
      error: 'No Config Found',
    });
  }

  return res.json(result);
};

export default Config;
