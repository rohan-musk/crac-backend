const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = 3001;

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    sameSite: 'none',
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.listen(PORT, () => console.log(`running express server on ${PORT}`));

app.use('/', require('./routes/index'));
