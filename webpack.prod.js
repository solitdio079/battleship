
 import {merge} from "webpack-merge"
 import common from "./webpack.common.js"

 const merged = merge(common, {
  mode: 'production',
  devtool: "source-map"
});

export default merged
