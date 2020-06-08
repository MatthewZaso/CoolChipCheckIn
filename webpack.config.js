module.exports = {
  mode: "production",
  watch: true,
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  devServer: {
    open: 'http://localhost:9000',
    port: 9000,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
