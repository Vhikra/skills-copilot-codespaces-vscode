// Create web server with express
// Create a route to handle comments
// Create a route to handle a single comment
// Start the server and listen on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

app.get('/comments/:id', (req, res) => {
  res.send('This is a single comment route');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
