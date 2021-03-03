---
title: Table
---

import InitAll from "../../src/InitAll"

<InitAll>

Use the table component to make information easier to compare and scan for users.

## Table

<table class="govuk-table  lbh-table">
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">January</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">February</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">March</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
        </tr>
  </tbody>
</table>

### HTML

```html
<table class="govuk-table  lbh-table">
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">January</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">February</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">March</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
        </tr>
  </tbody>
</table>
```

## Table with head

<table class="govuk-table  lbh-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">January</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">February</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">March</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
        </tr>
  </tbody>
</table>

### HTML

```html
<table class="govuk-table  lbh-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">January</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">February</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">March</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
        </tr>
  </tbody>
</table>
```
## Table with head and caption

<table class="govuk-table  lbh-table">
  <caption class="govuk-table__caption lbh-heading-h3 lbh-table__caption">Caption 1: Months and rates</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <th scope="row" class="govuk-table__header">January</th>
          <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
        </tr>
        <tr class="govuk-table__row">
          <th scope="row" class="govuk-table__header">February</th>
          <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
        </tr>
        <tr class="govuk-table__row">
          <th scope="row" class="govuk-table__header">March</th>
          <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
        </tr>
  </tbody>
</table>


### HTML

```html
<table class="govuk-table  lbh-table">
  <caption class="govuk-table__caption lbh-heading-h3 lbh-table__caption">Caption 1: Months and rates</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <th scope="row" class="govuk-table__header">January</th>
          <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
        </tr>
        <tr class="govuk-table__row">
          <th scope="row" class="govuk-table__header">February</th>
          <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
        </tr>
        <tr class="govuk-table__row">
          <th scope="row" class="govuk-table__header">March</th>
          <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
          <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
        </tr>
  </tbody>
</table>
```
</InitAll>
