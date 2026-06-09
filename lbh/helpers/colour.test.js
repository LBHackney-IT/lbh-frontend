const sassRender = require("../test/sass-render.cjs");

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

    expect(results.css.toString().trim()).toBe(
      ".foo {\n  color: #ff0000;\n}"
    );
  });

  // Dart Sass treats `red` as a colour value, not the string "red" like node-sass.
  it("works with a string colour name", async () => {
    const sass = `
        ${sassBootstrap}
        .foo {
          color: lbh-colour("red");
        }`;

    const results = await sassRender({ data: sass, ...sassConfig });

    expect(results.css.toString().trim()).toBe(
      ".foo {\n  color: #ff0000;\n}"
    );
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
