const { execSync } = require("child_process");
const { readdirSync, unlinkSync } = require("fs");
const { join } = require("path");

const root = join(__dirname, "..");
const requiredPrefixes = ["package/lbh/", "package/CHANGELOG.md"];
const requiredPaths = [
  "package/lbh/dialog.js",
  "package/lbh/dialog.d.ts",
];
const forbiddenPrefixes = ["package/dist/"];

const existingTarballs = new Set(
  readdirSync(root).filter((name) => name.endsWith(".tgz"))
);

execSync("npm pack", { cwd: root, stdio: "pipe" });

const tarball = readdirSync(root).find(
  (name) => name.endsWith(".tgz") && !existingTarballs.has(name)
);

if (!tarball) {
  console.error("verify:pack: npm pack did not produce a tarball");
  process.exit(1);
}

const tarballPath = join(root, tarball);

try {
  const listing = execSync(`tar -tzf "${tarballPath}"`, {
    encoding: "utf8",
  }).split("\n");

  for (const prefix of requiredPrefixes) {
    if (!listing.some((path) => path.startsWith(prefix))) {
      console.error(
        `verify:pack: missing ${prefix.replace("package/", "")} in pack`
      );
      process.exit(1);
    }
  }

  for (const path of requiredPaths) {
    if (!listing.includes(path)) {
      console.error(`verify:pack: missing ${path.replace("package/", "")} in pack`);
      process.exit(1);
    }
  }

  for (const prefix of forbiddenPrefixes) {
    if (listing.some((path) => path.startsWith(prefix))) {
      console.error("verify:pack: dist/ must not be included in the npm package");
      process.exit(1);
    }
  }

  console.log(`verify:pack ok (${listing.filter(Boolean).length} paths)`);
} finally {
  unlinkSync(tarballPath);
}
