### Creating the project 

1. need to install node.js from the official site (for your system)

2. npm install

3. npx create-react-app my-app

4. npm install --save react-router-dom

5. Any dependency you will can be installed 


### Webpack configuration
* Link: https://www.knowledgehut.com/blog/web-development/create-react-app-webpack#why-should-you-use-webpack?%C2%A0
* https://aglowiditsolutions.com/blog/react-webpack/
* https://jsramblings.com/creating-a-react-app-with-webpack/

* 1 Required Packages:

- A single commande that installs everything (you may not need everything)
> npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env style-loader css-loader file-loader --save-dev

- Global Install: 
> npm i -g webpack webpack-cli 
* ||
> npm i webpack-cli  (local install)


\\ Update `package.json` file 
{ 
//... 
"main": "index.js",
"scripts": { 
"build": "webpack"   //take away existing "build": react..
} 
}
\\

> npm i -D webpack webpack-cli 

* Project structure should look like :
REACT-WEBPACK 
└───src 
│ └───App.js 
│ └───index.js 
| └───index.html 
| └───index.css 
└───package-lock.json 
└───package.json 
└───webpack.config.json

> npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader  (if you didn't install everything with one command line)


\\ Update `package.json` file 
"devDependencies": { 
"@babel/core": "^7.13.16", 
"@babel/preset-env": "^7.13.15", 
"@babel/preset-react": "^7.13.13", 
"babel-loader": "^8.2.2", 
"webpack": "^5.35.1", 
"webpack-cli": "^4.6.0" 
} 
\\



* 2 webpack.config.js

<code>
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { 
          presets: ["@babel/preset-env", "@babel/preset-react"], 
        },
      },
    },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /font-awesome\.min\.css$/,
        use: ["style-loader", "css-loader", "raw-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    historyApiFallback: true,
  },
};

</code>



* 5 npm start 


* 6 npm run build || npx webpack


### Ready to deploy you React project 


 