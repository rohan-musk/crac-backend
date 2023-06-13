const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3001;

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.listen(PORT, () => console.log(`running express server on ${PORT}`));

app.use('/', require('./routes/index'));
