const esbuild = require("esbuild");
const path = require("path");
const { version } = require("../package.json");

const outfile = path.join(
  __dirname,
  "..",
  "dist",
  `lbh-frontend-${version}.min.js`
);

async function build() {
  const { default: browserslistToEsbuild } = await import(
    "browserslist-to-esbuild"
  );
  const target = browserslistToEsbuild(undefined, { env: "javascripts" });

  if (target.length === 0) {
    console.error(
      "No esbuild targets resolved from .browserslistrc [javascripts]"
    );
    process.exit(1);
  }

  console.log(
    `esbuild targets from .browserslistrc [javascripts]: ${target.join(", ")}`
  );

  await esbuild.build({
    entryPoints: [path.join(__dirname, "..", "lbh", "all.js")],
    bundle: true,
    outfile,
    format: "iife",
    globalName: "LBHFrontend",
    minify: true,
    sourcemap: false,
    target,
    logLevel: "info",
  });
}

build().catch(() => process.exit(1));
