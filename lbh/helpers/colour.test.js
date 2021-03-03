/* eslint-env jest */

const util = require("util");

const sass = require("node-sass");
const sassRender = util.promisify(sass.render);

const sassConfig = {
  includePaths: ["lbh/"],
  outputStyle: "compact",
};

describe("@function lbh-colour", () => {
  const sassBootstrap = `
    $lbh-colours: (
      "red": #ff0000,
      "green": #00ff00,
      "blue": #0000ff
    );
    @import "helpers/colour";
  `;

  it("returns a colour from the colour palette", async () => {
    const sass = `
      ${sassBootstrap}
      .foo {
        color: lbh-colour('red');
      }`;

    const results = await sassRender({ data: sass, ...sassConfig });

    expect(results.css.toString().trim()).toBe(".foo { color: #ff0000; }");
  });

  it("works with unquoted strings", async () => {
    const sass = `
        ${sassBootstrap}
        .foo {
          color: lbh-colour(red);
        }`;

    const results = await sassRender({ data: sass, ...sassConfig });

    expect(results.css.toString().trim()).toBe(".foo { color: #ff0000; }");
  });

  it("throws an error if a non-existent colour is requested", async () => {
    const sass = `
        ${sassBootstrap}
        .foo {
          color: lbh-colour('hooloovoo');
        }`;

    await expect(sassRender({ data: sass, ...sassConfig })).rejects.toThrow(
      "Unknown colour `hooloovoo`"
    );
  });
});
