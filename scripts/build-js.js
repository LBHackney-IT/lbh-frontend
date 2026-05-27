const esbuild = require("esbuild");
const path = require("path");
const { version } = require("../package.json");

const outfile = path.join(
  __dirname,
  "..",
  "dist",
  `lbh-frontend-${version}.min.js`
);

esbuild
  .build({
    entryPoints: [path.join(__dirname, "..", "lbh", "all.js")],
    bundle: true,
    outfile,
    format: "iife",
    globalName: "LBHFrontend",
    minify: true,
    sourcemap: false,    
    target: ["es2015"],
    logLevel: "info",
  })
  .catch(() => process.exit(1));
