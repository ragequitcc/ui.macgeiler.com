import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const findConfig = async (config: string) => {
  const result = await prisma.config.findUnique({
    where: {
      name: config,
    },
  });

  if (result === null) {
    return {
      error: 'Config Not Found',
    };
  }

  return result;
};

const upsertConfig = async (name: string, value: string) => {
  const result = await prisma.config.upsert({
    where: {
      name: name,
    },
    update: {
      name: name,
      value: value,
    },
    create: {
      name: name,
      value: value,
    },
  });

  return result;
};

const Config = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query.config.toString();

  if (req.method === 'GET') {
    await findConfig(query)
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }

  // POST
  if (req.method === 'POST') {
    if (!req.query.value) {
      return res.status(400).json({
        error: 'Missing Value In Query String',
      });
    }

    await upsertConfig(query, req.query.value.toString())
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }
};

export default Config;
