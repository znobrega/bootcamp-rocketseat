# React

## configs

> yarn add @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties -D

> yarn add babel-loader -D

> yarn add react react-dom prop-types

> yarn add webpack webpack-cli webpack-dev-server -D

> yarn add css-loader style-loader file-loader -D

- babel.config.js

```js
  module.exports = {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties"
    ]
  }
```

- webpack.config.js

<p></p>

```js
  const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};

```

- src/index.js

```js
  import React from "react";
  import { render } from "react-dom";

  import App from "./App";

  render(<App />, document.getElementById("root"));
```
