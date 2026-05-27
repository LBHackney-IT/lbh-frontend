const sassRender = require("../test/sass-render.cjs");

describe("The objects layer", () => {
  it("renders to CSS without errors", async () => {
    return sassRender({
      data: `
      @import "base";
      @import "objects/all";
    `,
      includePaths: ["lbh/"],
      outputStyle: "nested",
    });
  });
});
