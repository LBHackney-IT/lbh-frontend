/* eslint-env jest */

const glob = require("glob")
const fs = require("fs")
const { toMatchImageSnapshot } = require('jest-image-snapshot');
const pupetteer

  expect.extend({ toMatchImageSnapshot });


const componentFiles = glob.sync("./docs/components/*.md");

it.each(componentFiles)("%s matches snapshot", async fileName => {
    const file = await fs.promises.readFile(fileName)
    const Jsx = await mdx(file)

//     expect(image).toMatchImageSnapshot();


 render (<Jsx/>);

  expect(await takeImage()).toMatchImageSnapshot();
})

//use pupetter 
// use component paths as inputs (urls to the pages)
//before tests start run docs 
