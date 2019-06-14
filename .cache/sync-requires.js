const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/opt/lampp/htdocs/shiv-project/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/opt/lampp/htdocs/shiv-project/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/opt/lampp/htdocs/shiv-project/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/opt/lampp/htdocs/shiv-project/src/pages/login.js"))),
  "component---src-pages-signup-js": hot(preferDefault(require("/opt/lampp/htdocs/shiv-project/src/pages/signup.js")))
}

