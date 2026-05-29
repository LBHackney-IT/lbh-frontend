const sassRender = require("../test/sass-render.cjs");

describe("The core layer", () => {
  it("renders to CSS without errors", async () => {
    return sassRender({
      data: `
      @import "base";
      @import "core/all";
    `,
      includePaths: ["lbh/"],
      outputStyle: "nested",
    });
  });
});
