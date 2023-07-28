const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/exploit.gif', (req, res) => {
  const gifPath = path.join(__dirname, 'idk.gif');
  const gifStream = fs.createReadStream(gifPath);

  gifStream.on('open', () => {
    res.setHeader('Content-Type', 'image/gif');
    gifStream.pipe(res);
  });

  gifStream.on('error', (err) => {
    res.status(500).send('Error reading the GIF file.');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
