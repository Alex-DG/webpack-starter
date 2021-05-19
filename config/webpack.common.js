const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  /**
   * Entry: what file or files webpack will look at to compile.
   */
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  /**
   * Where the bundled file will resolve. We'll have it output in the dist folder, which is where production code gets built. The [name] in the output will be main, as specified in the entry object.
   */
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
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
      template: path.resolve(__dirname, './src/template.html'), // template file
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
