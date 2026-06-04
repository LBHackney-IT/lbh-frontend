const sassRender = require("../test/sass-render.cjs");

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
