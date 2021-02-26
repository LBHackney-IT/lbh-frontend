const glob = require("glob");
const util = require("util");
const sass = require("node-sass");

const sassRender = util.promisify(sass.render);

const sassFiles = glob.sync(`lbh/core/**/*.scss`);

it.each(sassFiles)("%s renders to CSS without errors", (file) => {
  return sassRender({
    file: file,
    includePaths: ["lbh/"],
  });
});
