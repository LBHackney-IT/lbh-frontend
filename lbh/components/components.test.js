/* eslint-env jest */

const glob = require("glob")
const fs = require("fs")
const mdx = require("@mdx-js/mdx")
const { configureAxe, toHaveNoViolations } = require("jest-axe")

const axe = configureAxe({
  rules: {
    //   we're dealing with page fragments, so landmarks may not be present
    'region': { enabled: false },
    // we have multiple examples per page, so duplicates are to be expected
    'duplicate-id-aria': {enabled: false},
    'duplicate-id': {enabled: false},
  }
})

expect.extend(toHaveNoViolations)

const componentFiles = glob.sync("./docs/components/*.md");

it.each(componentFiles)("%s has no accessibility violations", async fileName => {
    const file = await fs.promises.readFile(fileName)
    const jsx = await mdx(file)
    expect(await axe(jsx)).toHaveNoViolations()
})