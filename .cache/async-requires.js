// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/opt/lampp/htdocs/shiv-project/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/opt/lampp/htdocs/shiv-project/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/opt/lampp/htdocs/shiv-project/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/opt/lampp/htdocs/shiv-project/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-login-js": () => import("/opt/lampp/htdocs/shiv-project/src/pages/login.js" /* webpackChunkName: "component---src-pages-login-js" */),
  "component---src-pages-signup-js": () => import("/opt/lampp/htdocs/shiv-project/src/pages/signup.js" /* webpackChunkName: "component---src-pages-signup-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/opt/lampp/htdocs/shiv-project/.cache/data.json")

