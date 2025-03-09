const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  externals: [
    "mongodb",
    "mysql",
    "oracledb",
    "pg",
    "pg-native",
    "pg-query-stream",
    "typeorm-aurora-data-api-driver",
    "redis",
    "ioredis",
    "better-sqlite3",
    "sqlite3",
    "sql.js",
    "mssql",
    "hdb-pool",
    "@sap/hana-client",
    "@sap/hana-client/extension/Stream",
    "@google-cloud/spanner",
    "react-native-sqlite-storage",
  ].reduce((acc, mod) => {
    acc[mod] = `commonjs ${mod}`;
    return acc;
  }, {}),
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp:
        /typeorm\/driver\/(react-native|cordova|nativescript|expo|spanner|mongodb|aurora-data-api|aurora-data-api-pg|oracle|mariadb|cockroachdb|better-sqlite3|sqljs)\//,
    }),
  ],
};
