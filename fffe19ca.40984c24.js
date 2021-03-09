(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(120)),i={title:"Coding standards"},s={unversionedId:"contributing/coding-standards",id:"contributing/coding-standards",isDocsHomePage:!1,title:"Coding standards",description:"Commit messages",source:"@site/docs/contributing/coding-standards.md",slug:"/contributing/coding-standards",permalink:"/contributing/coding-standards",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/contributing/coding-standards.md",version:"current",sidebar:"someSidebar",previous:{title:"Ways to contribute",permalink:"/contributing/introduction"}},c=[{value:"Commit messages",id:"commit-messages",children:[]},{value:"Testing",id:"testing",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"commit-messages"},"Commit messages"),Object(o.b)("p",null,"We use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format"},"Angular commit message conventions"),". This lets us automatically release new versions to NPM with accurate ",Object(o.b)("a",{parentName:"p",href:"https://semver.org/"},"semver")," version numbers."),Object(o.b)("p",null,"These commit messages look like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"<type>(<scope>): <short summary>\n")),Object(o.b)("p",null,"For example, adding a new component to the design system might have a commit message like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"feat(component-xyz): Added component xyz\n")),Object(o.b)("p",null,"The keyword ",Object(o.b)("inlineCode",{parentName:"p"},"feat")," indicates that this commit includes a new feature, and will trigger a minor version increase when merged into the main branch."),Object(o.b)("p",null,"If you're just fixing a bug, you could use ",Object(o.b)("inlineCode",{parentName:"p"},"fix")," instead, which will trigger a patch release."),Object(o.b)("p",null,"The text inside the brackets indicates the scope of your changes. Normally this is the name of the component you're adding or changing. You could also use ",Object(o.b)("inlineCode",{parentName:"p"},"core")," for changes to tooling, or ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," for pure documentation changes."),Object(o.b)("p",null,"After the colon, you can write your commit message as normal."),Object(o.b)("p",null,"You can read more about this format in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format"},"semantic-release docs"),"."),Object(o.b)("h2",{id:"testing"},"Testing"),Object(o.b)("p",null,"We use ",Object(o.b)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," to run our tests."),Object(o.b)("p",null,"If you add a component that includes JavaScript, you must add jest unit tests for it."),Object(o.b)("p",null,"Because many of our components are purely presentational and consist only of HTML and SCSS, we don't unit test them in the usual way. Instead, we use:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.deque.com/axe/"},"axe")," to warn us about any accessibility issues in our markup"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/americanexpress/jest-image-snapshot"},"jest-image-snapshot")," to warn us about unexpected visual regressions in our components, so we don't accidentally change the way components look")),Object(o.b)("p",null,"We use the documentation file for a component (in ",Object(o.b)("inlineCode",{parentName:"p"},"docs/components"),") as the source material for these tests. This way you don't have to write seperate test cases."))}l.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return n?a.a.createElement(d,s(s({ref:t},u),{},{components:n})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);