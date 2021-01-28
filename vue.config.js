module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.99.134.126:7008",
        pathRewrite: {
          "^/api": "/api"
        },
        // 以下解决https 访问问题。上面的可以访问http
        changeOrigin: true,
        secure: false
      }
    }
  }
};
