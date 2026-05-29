const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const PROJECT_ROOT = path.dirname(require.resolve("../../package.json"));

const OUTPUT_STYLE_MAP = {
  nested: "expanded",
  compact: "expanded",
};

function resolveFromRoot (filePath) {
  return path.isAbsolute(filePath)
    ? filePath
    : path.join(PROJECT_ROOT, filePath);
}

const SASS_CLI = path.join(PROJECT_ROOT, "node_modules/sass/sass.js");

function renderWithCli ({ input, includePaths, outputStyle }) {
  const style = OUTPUT_STYLE_MAP[outputStyle] || outputStyle || "expanded";
  const args = [
    "--stdin",
    `--style=${style}`,
    "--no-source-map",
    ...includePaths.flatMap((dir) => [`--load-path=${dir}`]),
  ];

  const css = execFileSync(process.execPath, [SASS_CLI, ...args], {
    cwd: PROJECT_ROOT,
    input,
    encoding: "utf8",
  });

  return { css: Buffer.from(css) };
}

function sassRender (options) {
  const file = options.file && resolveFromRoot(options.file);
  const includePaths = [PROJECT_ROOT];
  if (options.includePaths) {
    includePaths.push(...options.includePaths.map(resolveFromRoot));
  }
  if (file) {
    includePaths.push(path.dirname(file));
  }

  try {
    const input = file ? fs.readFileSync(file, "utf8") : options.data;
    const result = renderWithCli({
      input,
      includePaths,
      outputStyle: options.outputStyle,
    });
    return Promise.resolve({ css: result.css });
  } catch (err) {
    if (err.stdout) {
      err.message = err.stderr?.toString() || err.message;
    }
    return Promise.reject(err);
  }
}

module.exports = sassRender;
