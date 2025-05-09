const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Order Service is running');
});

app.listen(3000, () => {
  console.log('Order Service on port 3000');
});

