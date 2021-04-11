---
title: Search box
---

import PreviewArea from "../../src/PreviewArea"

:::note
This component is intended for staff-facing use only.
:::

Use a search box to help users find relevant results quickly. It works well when paired with a table of data.

You should customise the input's placeholder attribute to reflect the kind of results it will return.

It uses visually hidden text and labels to stay accessible to screen readers.

<PreviewArea>
    <div className="govuk-form-group lbh-form-group lbh-search-box">
        <label class="govuk-visually-hidden" for="search">
            Search
        </label>
        <input
            class="govuk-input lbh-input govuk-input--width-10"
            id="search"
            name="search"
            type="search"
            placeholder="Search..."
        />
          <button className="lbh-search-box__action">
            <span className="govuk-visually-hidden">Search</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.6999 10.6C12.0747 10.6 13.9999 8.67482 13.9999 6.3C13.9999 3.92518 12.0747 2 9.6999 2C7.32508 2 5.3999 3.92518 5.3999 6.3C5.3999 8.67482 7.32508 10.6 9.6999 10.6ZM9.6999 12.6C13.1793 12.6 15.9999 9.77939 15.9999 6.3C15.9999 2.82061 13.1793 0 9.6999 0C6.22051 0 3.3999 2.82061 3.3999 6.3C3.3999 9.77939 6.22051 12.6 9.6999 12.6Z"
                fill="#0B0C0C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.70706 10.7071L1.70706 15.7071L0.292847 14.2929L5.29285 9.29289L6.70706 10.7071Z"
                fill="#0B0C0C"
              />
            </svg>
          </button>
    </div>
</PreviewArea>

```html
<div class="govuk-form-group lbh-form-group lbh-search-box">
  <label class="govuk-visually-hidden" for="search"> Search </label>
  <input
    class="govuk-input lbh-input govuk-input--width-10"
    id="search"
    name="search"
    type="search"
    placeholder="Search..."
  />
  <button class="lbh-search-box__action">
    <span class="govuk-visually-hidden">Search</span>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.6999 10.6C12.0747 10.6 13.9999 8.67482 13.9999 6.3C13.9999 3.92518 12.0747 2 9.6999 2C7.32508 2 5.3999 3.92518 5.3999 6.3C5.3999 8.67482 7.32508 10.6 9.6999 10.6ZM9.6999 12.6C13.1793 12.6 15.9999 9.77939 15.9999 6.3C15.9999 2.82061 13.1793 0 9.6999 0C6.22051 0 3.3999 2.82061 3.3999 6.3C3.3999 9.77939 6.22051 12.6 9.6999 12.6Z"
        fill="#0B0C0C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.70706 10.7071L1.70706 15.7071L0.292847 14.2929L5.29285 9.29289L6.70706 10.7071Z"
        fill="#0B0C0C"
      />
    </svg>
  </button>
</div>
```

## With an existing search

<PreviewArea>
    <div className="govuk-form-group lbh-form-group lbh-search-box">
        <label className="govuk-visually-hidden" for="search">
            Search
        </label>
        <input
            className="govuk-input lbh-input govuk-input--width-10"
            id="search"
            name="search"
            type="search"
            value="My query here"
            placeholder="Search..."
        />
          <button className="lbh-search-box__action">
            <span className="govuk-visually-hidden">Clear search</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z" fill="#0B0C0C"/>
                <path d="M11.2635 -0.050293L12.6778 1.36392L1.36404 12.6776L-0.0501709 11.2634L11.2635 -0.050293Z" fill="#0B0C0C"/>
            </svg>
          </button>
    </div>
</PreviewArea>

```html
<div class="govuk-form-group lbh-form-group lbh-search-box">
  <label class="govuk-visually-hidden" for="search"> Search </label>
  <input
    class="govuk-input lbh-input govuk-input--width-10"
    id="search"
    name="search"
    type="search"
    value="My query here"
    placeholder="Search..."
  />
  <button class="lbh-search-box__action">
    <span class="govuk-visually-hidden">Clear search</span>
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z"
        fill="#0B0C0C"
      />
      <path
        d="M11.2635 -0.050293L12.6778 1.36392L1.36404 12.6776L-0.0501709 11.2634L11.2635 -0.050293Z"
        fill="#0B0C0C"
      />
    </svg>
  </button>
</div>
```

## With a table

<PreviewArea>
    <div className="govuk-form-group lbh-form-group lbh-search-box">
        <label class="govuk-visually-hidden" for="search">
            Search
        </label>
        <input
            class="govuk-input lbh-input govuk-input--width-10"
            id="search"
            name="search"
            type="search"
            placeholder="Search..."
        />
          <button className="lbh-search-box__action">
            <span className="govuk-visually-hidden">Search</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.6999 10.6C12.0747 10.6 13.9999 8.67482 13.9999 6.3C13.9999 3.92518 12.0747 2 9.6999 2C7.32508 2 5.3999 3.92518 5.3999 6.3C5.3999 8.67482 7.32508 10.6 9.6999 10.6ZM9.6999 12.6C13.1793 12.6 15.9999 9.77939 15.9999 6.3C15.9999 2.82061 13.1793 0 9.6999 0C6.22051 0 3.3999 2.82061 3.3999 6.3C3.3999 9.77939 6.22051 12.6 9.6999 12.6Z"
                fill="#0B0C0C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.70706 10.7071L1.70706 15.7071L0.292847 14.2929L5.29285 9.29289L6.70706 10.7071Z"
                fill="#0B0C0C"
              />
            </svg>
          </button>
    </div>
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

</PreviewArea>
