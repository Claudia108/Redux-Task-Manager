const path = require('path');
const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));

const webpack = require('webpack');

const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(require('webpack-hot-middleware')(compiler));
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname, 'public/index.html');
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT + '....');
});
