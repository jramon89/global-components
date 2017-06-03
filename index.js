const webpack = require('webpack'),
    webpackDevServer = require('webpack-dev-server'),
    config = require('./webpack/webpack.config'),

    server = new webpackDevServer(webpack(config), {
    	hot:true,
    	publicPath: config.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(4000);
