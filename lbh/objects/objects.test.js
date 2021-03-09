/* eslint-env jest */

const glob = require("glob");
const util = require("util");
const sass = require("node-sass");

const sassRender = util.promisify(sass.render);

const sassFiles = glob.sync(`lbh/objects/**/*.scss`);

it.each(sassFiles)("%s renders to CSS without errors", (file) => {
  return sassRender({ file: file });
});
