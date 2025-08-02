module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", //백엔드 API 서버 주소
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
