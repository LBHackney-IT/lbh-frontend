---
title: Pagination
---

import PreviewArea from "../../src/PreviewArea"

:::note
This component is intended for staff-facing use only.
:::

Use pagination to help a user move through a set of results that are too long to display on one page.

It works well when paired with a table of data.

This kind of pagination is more complex than most resident-facing services need. If you need to show more results than can comfortably fit on a single page, consider using [simple pagination](/components/simple-pagination) instead.

<PreviewArea>
<nav className="lbh-pagination">
  <div className="lbh-pagination__summary">Showing 101—150 of 246 results</div>
  <ul class="lbh-pagination__list">
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Previous page">
      <span aria-hidden="true" role="presentation">&laquo;</span> Previous
    </a>
    </li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 1">1</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 2">2</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link lbh-pagination__link--current" href="#" aria-current="true" aria-label="Page 3, current page">3</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 4">4</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 5">5</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Next page">
    Next <span aria-hidden="true" role="presentation">&raquo;</span>
    </a>
    </li>
  </ul>
</nav>
</PreviewArea>

```html
<nav class="lbh-pagination">
  <div class="lbh-pagination__summary">Showing 101—150 of 246 results</div>
  <ul class="lbh-pagination">
    <li class="lbh-pagination__item">
      <a class="lbh-pagination__link" href="#" aria-label="Previous page">
        <span aria-hidden="true" role="presentation">&laquo;</span>
        Previous
      </a>
    </li>
    <li class="lbh-pagination__item">
      <a class="lbh-pagination__link" href="#" aria-label="Page 1">1</a>
    </li>
    <li class="lbh-pagination__item">
      <a class="lbh-pagination__link" href="#" aria-label="Page 2">2</a>
    </li>
    <li class="lbh-pagination__item">
      <a
        class="lbh-pagination__link lbh-pagination__link--current"
        href="#"
        aria-current="true"
        aria-label="Page 3, current page"
      >
        3
      </a>
    </li>
    <li class="lbh-pagination__item">
      <a class="lbh-pagination__link" href="#" aria-label="Page 4">4</a>
    </li>
    <li class="lbh-pagination__item">
      <a class="lbh-pagination__link" href="#" aria-label="Page 5">5</a>
    </li>
    <li class="lbh-pagination__item">
      <a class="lbh-pagination__link" href="#" aria-label="Next page">
        Next
        <span aria-hidden="true" role="presentation">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

## With a table

<PreviewArea>
<table class="govuk-table lbh-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">January 2018</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">February 2018</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">March 2018</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
        </tr>
  </tbody>
</table>

<nav className="lbh-pagination">
  <div className="lbh-pagination__summary">Showing 101—150 of 246 results</div>
  <ul class="lbh-pagination__list">
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Previous page"><span aria-hidden="true" role="presentation">&laquo;</span> Previous</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 1">1</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 2">2</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link lbh-pagination__link--current" href="#" aria-current="true" aria-label="Page 3, current page">3</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 4">4</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 5">5</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Next page">Next <span aria-hidden="true" role="presentation">&raquo;</span></a></li>
  </ul>
</nav>
</PreviewArea>

## Without a summary

<PreviewArea>
<nav className="lbh-pagination">
  <ul class="lbh-pagination__list">
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Previous page"><span aria-hidden="true" role="presentation">&laquo;</span> Previous</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 1">1</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 2">2</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link lbh-pagination__link--current" href="#" aria-current="true" aria-label="Page 3, current page">3</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 4">4</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Page 5">5</a></li>
    <li className="lbh-pagination__item">
    <a className="lbh-pagination__link" href="#" aria-label="Next page">Next <span aria-hidden="true" role="presentation">&raquo;</span></a></li>
  </ul>
</nav>
</PreviewArea>
