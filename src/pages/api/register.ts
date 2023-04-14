import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/app/libs/prismadb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('gamarjoba');
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { email, username, name, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
