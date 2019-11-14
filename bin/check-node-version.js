#! /usr/bin/env node

"use strict";

var pkg = require("../package.json");

var expectedVersion = pkg.engines.node;
var currentVersion = process.version.replace("v", "");

var versionMatchesExactly = expectedVersion === currentVersion;
var versionMatchesMajor =
  expectedVersion.split(".")[0] === currentVersion.split(".")[0];

if (versionMatchesExactly) {
  process.exit();
}

var nvmInstallText =
  "To do this you can install nvm (https://github.com/creationix/nvm) then " +
  "run `nvm install`.";

if (versionMatchesMajor) {
  console.log(
    "Warning: You are using Node.js version " +
      currentVersion +
      " which we do not use. " +
      "\n\n" +
      "You may encounter issues, consider installing Node.js version " +
      expectedVersion +
      "." +
      "\n\n" +
      nvmInstallText
  );

  process.exit();
}

console.log(
  "You are using Node.js version " +
    currentVersion +
    " which we do not support. " +
    "\n\n" +
    "Please install Node.js version " +
    expectedVersion +
    " and try again." +
    "\n\n" +
    nvmInstallText
);

process.exit(1); // exit with a failure mode
