const util = require("util");
const sass = require("node-sass");

const sassRender = util.promisify(sass.render);

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
