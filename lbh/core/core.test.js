const util = require("util");
const sass = require("node-sass");

const sassRender = util.promisify(sass.render);

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
