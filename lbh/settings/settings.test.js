/* eslint-env jest */

const path = require("path");

const sassRender = require("../test/sass-render.cjs");

describe("The settings layer", () => {
  it("should not output any CSS", async () => {
    const settings = path.join("lbh", "settings", "_all.scss");

    const output = await sassRender({ file: settings });
    expect(output.css.toString()).toEqual("");
  });
});
