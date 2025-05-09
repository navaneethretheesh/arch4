const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Product Service is running');
});

app.listen(3000, () => {
  console.log('Product Service on port 3000');
});

