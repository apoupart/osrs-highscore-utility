const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const highscore = require('./server/controller/highscore');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
    console.log('get the index path');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post('/player', highscore.get_current_user);
app.post('/get-player', highscore.get_user_by_name);

app.listen(process.env.PORT || 8080);