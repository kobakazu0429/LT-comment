const express = require('express');
const app = express();
const http = require('http').Server(app);
const fallback = require('express-history-api-fallback');
const io = require('socket.io')(http);

const port = process.env.PORT || 5001;
const root = `${__dirname}/build`;

// Example
// app.get("/", (req, res) => {
//   return res.send("Hello world.");
//   res.end();
// });

io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('COMMENT', msg => {
    console.log(msg);
    io.emit('SCREEN', msg);
  });

  socket.on('SEND_IMAGE', msg => {
    console.log(msg);
    io.emit('SCREEN', msg);
  });

  socket.on('SPEAKER_INFO', msg => {
    console.log(msg);
    io.emit('LISTENER', msg);
  });
});

app.use(express.static(root));
app.use(fallback('index.html', { root }));

http.listen(port, () => {
  console.log('listening on :' + port);
});
