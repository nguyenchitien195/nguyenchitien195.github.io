const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tien/projects/nguyenchitien195.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/tien/projects/nguyenchitien195.github.io/src/pages/about.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("/home/tien/projects/nguyenchitien195.github.io/src/pages/blogs.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/tien/projects/nguyenchitien195.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/tien/projects/nguyenchitien195.github.io/src/pages/index.js"))),
  "component---src-pages-portfolios-js": hot(preferDefault(require("/home/tien/projects/nguyenchitien195.github.io/src/pages/portfolios.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/home/tien/projects/nguyenchitien195.github.io/src/pages/resume.js")))
}

