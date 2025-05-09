const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('User Service is running');
});

app.listen(3000, () => {
  console.log('User Service on port 3000');
});

