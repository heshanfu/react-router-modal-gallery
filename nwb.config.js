module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ReactRouterModalGallery",
      externals: {
        react: "React",
        "react-dom": "ReactDom",
        "react-router": "ReactRouter",
        "react-router-dom": "ReactRouterDom"
      }
    }
  }
};
