const express = require('express');
const app = express();
const port = 3000;

// Для разбора JSON в теле запроса
app.use(express.json());

// Приветственный API-эндпоинт
app.post('/api/hello', (req, res) => {
  res.json({ message: 'Привет от Node.js сервера!' });
});

// API-эндпоинт для возвращения текущего времени
app.get('/api/time', (req, res) => {
  res.json({ currentTime: new Date().toTimeString() });
});

// Эхо-API для возвращения данных, отправленных через POST-запрос
app.post('/api/echo', (req, res) => {
  res.json(req.body);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
