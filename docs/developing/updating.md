---
title: Updating
---

You can update with Node.js package manager (npm) if you [originally installed
LBH Frontend with npm](https://github.com/LBHackney-IT/lbh-frontend/blob/master/docs/installation/installing-with-npm.md).

## Find out which version you're using

To find out which version of LBH Frontend your project is using, you can run:

```shell
npm list lbh-frontend
```

If you do not have command line access, you can see the version number in the
`package.json` file in the root of your project directory. For example:

```json
'lbh-frontend': ‘1.9.4’
```

## Update LBH Frontend using npm

To find out the latest version of LBH Frontend, check the [release
notes](https://github.com/LBHackney-IT/lbh-frontend/releases) in the LBH Frontend GitHub repository.

You may need to make code changes to keep LBH Frontend working in your project, if the major version number changes when you update. The major version number is the first digit in the version number.

To update to the most recent version, run:

```shell
npm install lbh-frontend@latest
```

If you want to install an earlier version, replace `latest` with the version that you want to update to. For example:

```shell
npm install lbh-frontend@1.7.0
```
