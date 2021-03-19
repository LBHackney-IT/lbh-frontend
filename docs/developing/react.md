---
title: Using it with React
---

:::note
While the design system doesn't use React components, it _is_ fully compatible with them. In fact, [this documentation website](https://v2.docusaurus.io/) is a React app.
:::

If you're reading this, you're probably trying to use the design system with [Next.js](https://nextjs.org/) or a similar kind of React app.

The design system can save you a lot of time and effort in making your React components look right. But, if you need complex pre-made components that have lots of stateful client-side functionality, you're better off [going elsewhere](#building-components-with-complex-interactions-and-logic).

## Setting it up

### Modify your class names

React doesn't support the `class` attribute, so you'll need to replace all instances with `className` instead.

### Client-side routing

All components need to be initialised before their JavaScript features will work. The init function must be called _after_ the HTML has been rendered to the page.

On a server-rendered page this is straightforward, but on a client-rendered React app you must remember to re-initialise the JS whenever you render new components.

One option is to call the component's init function in a [`useEffect`](https://reactjs.org/docs/hooks-effect.html) hook after it renders. For example:

```jsx
useEffect(() => {
  if (typeof window !== "undefined") {
    require("lbh-frontend").initAll();
  }
}, []);
```

### Server-side rendering

If you're using a SSR framework like Next.js, you might see errors like `document is not defined`.

This is because Next will automatically try to compile the JavaScript to run on the server as well as the client.

You can solve this issue by wrapping your component init calls in an `if` statement that checks the global window variable is set:

```jsx
if (typeof window !== "undefined") {
  require("lbh-frontend").initAll();
}
```

## Building components with complex interactions and logic

This design system doesn't include many components that users need to have complex, stateful interactions with (yet).

If you need to build something more powerful, you are better off ignoring the JavaScript this library comes with and starting with a React solution first.

You can then customise the look and feel of your components using code samples from this library.

There are plenty of well-maintained, accessible-by-default React libraries to choose from:

- [Reach UI](https://reach.tech/)
- [GOV.UK React JSX](https://github.com/surevine/govuk-react-jsx)

This advice might change as the design system grows.

## Why is there no React component library any more?

In the past Hackney has tried to make React ports of this design system, but it's always been more trouble than it's worth to maintain them.

The alternative would be to go all-in with React, but this wouldn't work for the many non-React apps we still need to maintain.
