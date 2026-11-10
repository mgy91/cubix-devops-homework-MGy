const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.get('/api/data', (req, res) => {
  res.json({ 
    status: "success", 
    message: "Hello / háttérszolgáltatás (App2)!" 
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App2 fut a következő porton: ${PORT}`);
});
