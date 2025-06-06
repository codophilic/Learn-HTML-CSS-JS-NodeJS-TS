const path = require('path');
const CleanPlugin = require('clean-webpack-plugin')

module.exports={
    mode: 'development',
    entry: ['./src/app1.js','./src/app.js','./src/onClick.js'],
    output:{
        filename: 'finalBundle.js',
        path:path.resolve(__dirname,'assets','scripts'),
        publicPath: 'assets/scripts'
    },
    // plugins:[
    //     new CleanPlugin.CleanWebpackPlugin()
    // ]
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                targets: "defaults",
                presets: [
                  ['@babel/preset-env']
                ]
              }
            }
          }
        ]
      }
};