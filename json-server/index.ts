import fs from 'fs';
import jsonServer from 'json-server';
import path from 'path';
import { isApiError } from './utils';

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Небольшая задержка, чтоб запрос не проходил мгновенно, имитация апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });

  next();
});

type User = {
  id: string;
  username: string;
  password: string;
};

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), { encoding: 'utf-8' }),
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user: User) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);

    if (isApiError(e)) {
      return res.status(500).json({ message: e.message });
    }
  }
});

// Проверяем авторизован ли юзер
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({
      message: 'AUTH ERROR',
    });
  }

  next();
});

server.use(router);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});
