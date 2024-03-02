import express from 'express';

const app = express();
const port = 3000;
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

type UpdateUserData = {
  name?: string;
  profilePicture?: string;
  password?: string;
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/update-user', async (req, res) => {
  try {
    const { name, profilePicture, password, id } = req.body;
    const token = req.headers.authorization;

    if (!token) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    let updateData: UpdateUserData = {};

    if (name) {
      updateData.name = name;
    }

    if (profilePicture) {
      updateData.profilePicture = profilePicture;
    }

    if (password) {
      updateData.password = password;
    }

    await prisma.user.update({
      where: {
        id: id,
      },
      data: updateData,
    });

    return res.json({ message: 'User profile updated' });
  } catch (err) {
    if (err instanceof Error) {
      return res
        .status(500)
        .json({ error: 'Internal Server Error' + err.message });
    }
    return res.status(500).json({ error: err });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
