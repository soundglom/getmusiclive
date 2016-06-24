const webpack = require('webpack');
const config = require('./../../webpack.config.js');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);

const webpackMiddleware = (server) => {
  server.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,    
    historyApiFallback: true
  }));

  server.use(hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
};

module.exports = webpackMiddleware;
