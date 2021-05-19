const path = require('path')

/**
 * entry: what file or files webpack will look at to compile.
 * output: where the bundled file will resolve. We'll have it output in the dist folder, which is where production code gets built. The [name] in the output will be main, as specified in the entry object.
 */
module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
}
