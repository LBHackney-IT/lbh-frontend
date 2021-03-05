---
title: Blank page template
---

```html
<!DOCTYPE html>
<html lang="en" class="govuk-template lbh-template">
  <head>
    <meta charset="utf-8" />
    <title><!-- Page title goes here --> | Hackney Council</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <meta name="theme-color" content="#0b0c0c" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Put your path to the LBHFrontend CSS File in the href attribute here -->
    <link href="" rel="stylesheet" type="text/css" />
  </head>
  <body class="govuk-template__body">
    <script>
      document.body.className = document.body.className
        ? document.body.className + " js-enabled"
        : "js-enabled"
    </script>
    <!-- Skip link goes here -->
    <!-- Cookie banner goes here -->
    <!-- Header goes here -->
    <!-- Phase banner goes here -->
    <!-- Announcements go here -->
    <!-- Breadcrumbs go here -->
    <main class="lbh-main-wrapper " id="main-content" role="main">
      <div class="lbh-container">
        <!-- Main content components go here -->
      </div>
    </main>
    <!-- Put your path to the LBHFrontend JS File in the src attribute here -->
    <script src=""></script>
    <script>
      window.LBHFrontend.initAll()
    </script>
  </body>
</html>
```
