const path = "/proxy_path/*";
const proxy = "/proxy_path/";

const pathRewrite = {};
pathRewrite["^" + proxy.slice(0, -1)] = "";

const configs = {
  target: "http://localhost:9015/api/",
  secure: false,
  changeOrigin: true,
  pathRewrite,
  logLevel: "debug",
};

const PROXY_CONFIG = {};
PROXY_CONFIG[path] = configs;

module.exports = PROXY_CONFIG;
