---
title: Simple pagination
---

import PreviewArea from "../../src/PreviewArea"

Use pagination to help a user move through a set of results that are too long to display on one page.

This is a simpler alternative to [full pagination](/components/pagination). It's a good fit for search result pages.

<PreviewArea>
    <nav className="lbh-simple-pagination">
        <a className="lbh-simple-pagination__link" href="#" aria-label="Page 1">
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L2 9.5L10 18" stroke-width="2"/>
            </svg>
            Previous post
            <span className="lbh-simple-pagination__title">
                Title here
            </span>
        </a>
        <a className="lbh-simple-pagination__link lbh-simple-pagination__link--next" href="#" aria-label="Page 1">
            Next post
            <span className="lbh-simple-pagination__title">
                Title here
            </span>
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 18L9 9.5L1 1" stroke-width="2"/>
            </svg>
        </a>
    </nav>
</PreviewArea>

```html
<nav class="lbh-simple-pagination">
  <a class="lbh-simple-pagination__link" href="#">
    Previous page
    <span class="lbh-simple-pagination__title"> Title here </span>
  </a>
  <a
    class="lbh-simple-pagination__link lbh-simple-pagination__link--next"
    href="#"
  >
    Next page
    <span class="lbh-simple-pagination__title"> Title here </span>
  </a>
</nav>
```

## With page numbers

<PreviewArea>
    <nav className="lbh-simple-pagination">
        <a className="lbh-simple-pagination__link" href="#" aria-label="Page 1">
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L2 9.5L10 18" stroke-width="2"/>
            </svg>
            Previous page
            <span className="lbh-simple-pagination__title">
                1 of 3
            </span>
        </a>
        <a className="lbh-simple-pagination__link lbh-simple-pagination__link--next" href="#" aria-label="Page 1">
            Next page
            <span className="lbh-simple-pagination__title">
                3 of 3
            </span>
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 18L9 9.5L1 1" stroke-width="2"/>
            </svg>
        </a>
    </nav>
</PreviewArea>

```html
<nav class="lbh-simple-pagination">
  <a class="lbh-simple-pagination__link" href="#">
    Previous page
    <span class="lbh-simple-pagination__title"> 1 of 3 </span>
  </a>
  <a
    class="lbh-simple-pagination__link lbh-simple-pagination__link--next"
    href="#"
  >
    Next page
    <span class="lbh-simple-pagination__title"> 3 of 3 </span>
  </a>
</nav>
```

## At start

<PreviewArea>
    <nav className="lbh-simple-pagination">
        <a className="lbh-simple-pagination__link lbh-simple-pagination__link--next" href="#" aria-label="Page 1">
            Next page
            <span className="lbh-simple-pagination__title">
                2 of 3
            </span>
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 18L9 9.5L1 1" stroke-width="2"/>
            </svg>
        </a>
    </nav>
</PreviewArea>

```html
<nav class="lbh-simple-pagination">
  <a
    class="lbh-simple-pagination__link lbh-simple-pagination__link--next"
    href="#"
  >
    Next page
    <span class="lbh-simple-pagination__title"> 2 of 3 </span>
  </a>
</nav>
```
