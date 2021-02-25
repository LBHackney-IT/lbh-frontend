---
title: Using it with React
---

:::note
While the design system doesn't use React components, it _is_ fully compatible with them. In fact, [this documentation website](https://v2.docusaurus.io/) is a React app.
:::

If you're reading this, you're probably trying to use the design system with [Next.js](https://nextjs.org/) or a similar kind of React app.

The design system can save you a lot of time and effort in making your React components look right.

However, if you need complex pre-made components that have significant built-in client-side functionality, you're better off [going elsewhere](#building-components-with-complex-interactions-and-logic).

## Setting it up

### Image assets

Depending on your bundler settings, you might have issues with images not appearing in components like the [contact block](/components/contacts-block).

Fixing this usually involves making a tweak to the `$lbh-assets-path` sass variable.

For example, this documentation website uses:

```scss
$lbh-asset-path: "~!file-loader!../lbh/assets";
```

That `~!file-loader!` prefix [forces webpack to interpret SVG files as static images](https://github.com/facebook/docusaurus/issues/3566#issue-718199061) rather than JavaScript modules.

### Server-side rendering

If you're using a SSR framework like Next.js, you might see errors like `document is not defined`.

This is because Next will automatically try to compile the JavaScript to run on the server as well as the client.

You can solve this issue by wrapping your component init calls in an `if` statement that checks the global window variable is set:

```jsx
if (typeof window !== "undefined") {
  require("lbh-frontend-react/lbh/all").initAll();
}
```

### Client-side routing

All components need to be initialised before their JavaScript features will work. The init function must be called _after_ the HTML has been rendered to the page.

On a server-rendered page this is straightforward, but on a client-rendered React app you have more choices.

One option is to call the component's init function in a [`useEffect`](https://reactjs.org/docs/hooks-effect.html) hook after it renders. For example:

```jsx
useEffect(() => {
  if (typeof window !== "undefined") {
    require("lbh-frontend-react/lbh/all").initAll();
  }
}, []);
```

## Building components with complex interactions and logic

This design system doesn't include many components that users need to have complex, stateful interactions with (yet).

If you need to build something more powerful, you are better off ignoring the JavaScript this library comes with and starting with a React solution first.

You can then customise the look and feel of your components using code samples from this library.

There are plenty of well-maintained, accessible-by-default React libraries to choose from:

- [Reach UI](https://reach.tech/)
- [GOV.UK React JSX](https://github.com/surevine/govuk-react-jsx)

This advice might change as the design system grows.
