const path = require("path");

module.exports = {
//   //Inform webpack that we are building a bundle
//   //for NodeJS rather than for the browser
//   target: "node",

  //Tell webpack the root file of our server application
  entry: "./src/client/client.js",

  //Tell webpack where to put the output file
  //that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { target: { browser: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
