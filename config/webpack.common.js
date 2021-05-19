const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const paths = require('./paths')

module.exports = {
  /**
   * Entry: what file or files webpack will look at to compile.
   */
  // entry: [paths.src + '/index.js'],
  entry: {
    main: `${paths.src}/index.js`,
  },

  /**
   * Where the bundled file will resolve. We'll have it output in the dist folder, which is where production code gets built. The [name] in the output will be main, as specified in the entry object.
   */
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  /**
   * Webpack has a plugin interface that makes it flexible.
   * Internal webpack code and third party extensions use plugins.
   */
  plugins: [
    // Clears out anything in the dist folder after each build. This is important to ensure no old data gets left behind.
    new CleanWebpackPlugin(),

    // Inject the script automatically in the HTML template page
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: `${paths.src}/template.html`,
      filename: 'index.html', // output file
    }),
  ],

  /**
   * Webpack uses loaders to preprocess files loaded via modules.
   */
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // Transpile files with Babel and webpack.
      },

      /**
       * Exports HTML as string. HTML is minimized when the compiler demands
       * i.e: src=".images/ocean.jpg"
       *
       * doc:https://webpack.js.org/loaders/html-loader/
       */
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },

      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
}
