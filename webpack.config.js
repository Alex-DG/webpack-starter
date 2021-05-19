const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Entry: what file or files webpack will look at to compile.
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  // Where the bundled file will resolve. We'll have it output in the dist folder, which is where production code gets built. The [name] in the output will be main, as specified in the entry object.
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    // Inject the script automatically in the HTML template page
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
  ],
}
