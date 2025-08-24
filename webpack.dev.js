//import path from "path"
//import  HtmlWebpackPlugin  from "html-webpack-plugin"
import {merge} from  "webpack-merge"
import common from "./webpack.common.js"

const merged =  merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer:  {
   watchFiles: ["./src/template.html"]
}
});

export default merged
