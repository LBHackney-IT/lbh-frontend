---
title: Usage with TypeScript
---

The Hackney design system fully supports TypeScript.
Simply import from the library to access the typings.

If you are using the [install from `dist`](/developing/installing-from-dist) approach you can add the typings directly to your `tsconfig.json` to access the `window.LBHFrontend` exports, without directly importing from `lbh-frontend`.

```json
{
  "compilerOptions": {
    "strict": true
  },
  "include": ["src/**/*", "node_modules/lbh-frontend/lbh/index.d.ts"]
}
```
