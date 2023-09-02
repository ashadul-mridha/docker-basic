import cors from 'cors';
import 'dotenv/config';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ashy', (req, res) => {
  res.send('Hello Ashy!');
});

app.get('/rafa', (req, res) => {
  res.send('Hello rafa!');
});

app.get('/ruba', (req, res) => {
  res.send('Hello ruba!');
});

app.get('/adib', (req, res) => {
  res.send('Hello adib!');
});


app.get('/zisan', (req, res) => {
  res.send('Hello zisan!');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
