var path = require('path'); // eslint-disable-line no-var
var autoprefixer = require('autoprefixer');  // eslint-disable-line no-var

module.exports = {
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]',
          'postcss-loader',
          `sass-loader?precision=10&indentedSyntax=sass`,
        ],
        include: [
          path.join(__dirname, '../src'),
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]',
          'postcss-loader',
        ],
        include: [
          path.join(__dirname, '../src'),
          path.join(__dirname, '../node_modules'),
        ],
      },
      {
        test: /\.svg$/,
        loaders: ['url-loader?limit=7000'],
      },
    ],
  },
};
