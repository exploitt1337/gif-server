const express = require('express');
const fs = require('fs');
// const path = require('path');

const app = express();
const PORT = 1337;

app.get('/exploit.gif', (req, res) => {
  const gifPath = ('idk.gif');
  const gifStream = fs.createReadStream(gifPath);

  gifStream.on('open', () => {
    res.setHeader('Content-Type', 'image/gif');
    gifStream.pipe(res);
  });

  gifStream.on('error', (err) => {
    res.status(500).send('Error reading the GIF file.');
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
