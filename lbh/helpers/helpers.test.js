const path = require("path");

const sassRender = require("../test/sass-render.cjs");

describe("The helpers layer", () => {
  it("should not output any CSS", async () => {
    const helpers = path.join("lbh", "helpers", "_all.scss");

    const output = await sassRender({ file: helpers });
    expect(output.css.toString()).toEqual("");
  });
});
