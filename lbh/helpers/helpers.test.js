const path = require("path");
const util = require("util");

const sass = require("node-sass");
const sassRender = util.promisify(sass.render);

describe("The helpers layer", () => {
  it("should not output any CSS", async () => {
    const helpers = path.join("lbh", "helpers", "_all.scss");

    const output = await sassRender({ file: helpers });
    expect(output.css.toString()).toEqual("");
  });
});
