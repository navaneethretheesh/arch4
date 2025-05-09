const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(' Service is running');
});

app.listen(3000, () => {
  console.log(' Service on port 3000');
});
