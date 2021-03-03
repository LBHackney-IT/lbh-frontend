/* eslint-env jest */

const util = require("util");

const sass = require("node-sass");
const sassRender = util.promisify(sass.render);

const sassConfig = {
  includePaths: ["lbh/"],
  outputStyle: "compressed",
};

describe("@mixin lbh-exports", () => {
  it("will only output a named section once", async () => {
    const sass = `
      @import "tools/exports";
      @include lbh-exports(foo) {
        .foo {
          color: red;
        }
      }
      @include lbh-exports(foo) {
        .foo {
          color: blue;
        }
      }`;

    const results = await sassRender({ data: sass, ...sassConfig });

    expect(results.css.toString().trim()).toEqual(".foo{color:red}");
  });

  it("will export differently named sections", async () => {
    const sass = `
      @import "tools/exports";
      @include lbh-exports(foo) {
        .foo {
          color: red;
        }
      }
      @include lbh-exports(bar) {
        .bar {
          color: blue;
        }
      }`;

    const results = await sassRender({ data: sass, ...sassConfig });

    expect(results.css.toString().trim()).toEqual(
      ".foo{color:red}.bar{color:blue}"
    );
  });
});
