---
title: Summary list
---

Use the summary list to summarise information, for example, a user’s responses at the end of a form.

## Summary list

<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Delete<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> date of birth</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
        email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> contact information</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Change<span class="govuk-visually-hidden"> contact information</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
</dl>

### HTML

```html
<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Delete<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> date of birth</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
        email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> contact information</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Change<span class="govuk-visually-hidden"> contact information</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
</dl>
```

## Summary list without actions

<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
      </div>
</dl>

### HTML

```html
<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
      </div>
</dl>
```

## Summary list with some actions

<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Delete<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
          <span class="govuk-summary-list__actions"></span>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
          <span class="govuk-summary-list__actions"></span>
      </div>
</dl>

### HTML

```html
<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Delete<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
          <span class="govuk-summary-list__actions"></span>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
          <span class="govuk-summary-list__actions"></span>
      </div>
</dl>
```

## Summary list no-border

<dl class="govuk-summary-list govuk-summary-list--no-border lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
      </div>
</dl>

### HTML

```html
<dl class="govuk-summary-list govuk-summary-list--no-border lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
      </div>
</dl>
```

## Summary list no-border on last row

<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
      <div class="govuk-summary-list__row govuk-summary-list__row--no-border">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
      </div>
</dl>

### HTML

```html
<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Firstname Lastname
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
      </div>
      <div class="govuk-summary-list__row govuk-summary-list__row--no-border">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
      </div>
</dl>
```


## Summary list overridden-widths

<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key govuk-!-width-one-half">
          Name
        </dt>
        <dd class="govuk-summary-list__value govuk-!-width-one-quarter">
          Firstname Lastname
        </dd>
          <dd class="govuk-summary-list__actions govuk-!-width-one-half">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Delete<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> date of birth</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> contact information</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Change<span class="govuk-visually-hidden"> contact information</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
</dl>

### HTML

```html
<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key govuk-!-width-one-half">
          Name
        </dt>
        <dd class="govuk-summary-list__value govuk-!-width-one-quarter">
          Firstname Lastname
        </dd>
          <dd class="govuk-summary-list__actions govuk-!-width-one-half">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Delete<span class="govuk-visually-hidden"> name</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          13/08/1980
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> date of birth</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact information
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          email@email.com
        </p>
        <p class="govuk-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Edit<span class="govuk-visually-hidden"> contact information</span>
                  </a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Change<span class="govuk-visually-hidden"> contact information</span>
                  </a>
                  </li>
              </ul>
          </dd>
      </div>
</dl>
```

## Summary list check-your-answers

<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Sarah Philips
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> name</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          5 January 1978
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> date of birth</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Address
        </dt>
        <dd class="govuk-summary-list__value">
          72 Guild Street<br />
        London<br />
        SE23 6FH
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> address</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact details
        </dt>
        <dd class="govuk-summary-list__value">
          07700 900457<br />
        sarah.phillips@example.com
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> contact details</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Previous application number
        </dt>
        <dd class="govuk-summary-list__value">
          502135326
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> previous application number</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Licence type
        </dt>
        <dd class="govuk-summary-list__value">
          For personal use
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> licence type</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Home address
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          72 Guild Street<br />
          London<br />
          SE23 6FH
        </p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> home address</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Licence period
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">This is a longer paragraph of text provided by the user to provide additional information.</p>
        <p class="govuk-body">This is a second paragraph of text provided by the user.</p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> licence period</span>
            </a>
          </dd>
      </div>
</dl>

### HTML

```html
<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Sarah Philips
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> name</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          5 January 1978
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> date of birth</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Address
        </dt>
        <dd class="govuk-summary-list__value">
          72 Guild Street<br />
        London<br />
        SE23 6FH
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> address</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Contact details
        </dt>
        <dd class="govuk-summary-list__value">
          07700 900457<br />
        sarah.phillips@example.com
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> contact details</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Previous application number
        </dt>
        <dd class="govuk-summary-list__value">
          502135326
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> previous application number</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Licence type
        </dt>
        <dd class="govuk-summary-list__value">
          For personal use
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> licence type</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Home address
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">
          72 Guild Street<br />
          London<br />
          SE23 6FH
        </p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> home address</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Licence period
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">This is a longer paragraph of text provided by the user to provide additional information.</p>
        <p class="govuk-body">This is a second paragraph of text provided by the user.</p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> licence period</span>
            </a>
          </dd>
      </div>
</dl>
```

## Summary list extreme

<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Buy</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Use</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Break</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Fix</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Trash</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Change</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Mail</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Upgrade</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Charge</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Point</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Coom</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Press</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Snap</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Work</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Quick</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Erase</a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Long website address
        </dt>
        <dd class="govuk-summary-list__value">
          <a class="govuk-link" href="https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch">https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</a>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> long website address</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Long email address
        </dt>
        <dd class="govuk-summary-list__value">
          <a class="govuk-link" href="mailto:webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com">webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com</a>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> long email address</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          No wrapping allowed
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body" style={{whiteSpace: 'nowrap'}}>michelle.longish.name@example.com</p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> no wrapping allowed</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Pneumonoultramicroscopicsilicovolcanoconiosis
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">Pneumonoultramicroscopicsilicovolcanoconiosis is a word coined by the president of the National Puzzlers’ League as a synonym for the disease known as silicosis. It is the longest word in the English language published in a dictionary, the Oxford English Dictionary, which defines it as "an artificial long word said to mean a lung disease caused by inhaling very fine ash and sand dust."</p>
        <p class="govuk-body">Silicosis is a form of occupational lung disease caused by inhalation of crystalline silica dust, and is marked by inflammation and scarring in the form of nodular lesions in the upper lobes of the lungs. It is a type of pneumoconiosis.</p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Write</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Cut</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Paste</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Save</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Load</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Check</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Quick</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Rewrite</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Plug</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Play</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Burn</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Rip</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Drag and drop</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Zip</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Unzip</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Lock</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Fill</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Curl</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Find</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      View</a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Its vanished trees, the trees that had made way for Gatsby’s house, Pneumonoultramicroscopicsilicovolcanoconiosis had once pandered in whispers to the last and greatest of all human dreams; for a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an aesthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder.
        </dt>
        <dd class="govuk-summary-list__value">
          The Great Gatsby
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Code</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Jam</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Unlock</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Surf</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Scroll</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Pose</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Click</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Cross</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Crack</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Twitch</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Update</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Name</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Read</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Tune</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Print</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Scan</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Send</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Fax</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Rename</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Touch</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Bring</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Pay</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Watch</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Turn</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Leave</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Stop</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Format</a>
                  </li>
              </ul>
          </dd>
      </div>
</dl>

### HTML

```html
<dl class="govuk-summary-list  lbh-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Buy</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Use</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Break</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Fix</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Trash</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Change</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Mail</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Upgrade</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Charge</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Point</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Coom</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Press</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Snap</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Work</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Quick</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Erase</a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Long website address
        </dt>
        <dd class="govuk-summary-list__value">
          <a class="govuk-link" href="https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch">https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</a>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> long website address</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Long email address
        </dt>
        <dd class="govuk-summary-list__value">
          <a class="govuk-link" href="mailto:webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com">webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com</a>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> long email address</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          No wrapping allowed
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body" style={{whiteSpace: 'nowrap'}}>michelle.longish.name@example.com</p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                Change<span class="govuk-visually-hidden"> no wrapping allowed</span>
            </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Pneumonoultramicroscopicsilicovolcanoconiosis
        </dt>
        <dd class="govuk-summary-list__value">
          <p class="govuk-body">Pneumonoultramicroscopicsilicovolcanoconiosis is a word coined by the president of the National Puzzlers’ League as a synonym for the disease known as silicosis. It is the longest word in the English language published in a dictionary, the Oxford English Dictionary, which defines it as "an artificial long word said to mean a lung disease caused by inhaling very fine ash and sand dust."</p>
        <p class="govuk-body">Silicosis is a form of occupational lung disease caused by inhalation of crystalline silica dust, and is marked by inflammation and scarring in the form of nodular lesions in the upper lobes of the lungs. It is a type of pneumoconiosis.</p>
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Write</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Cut</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Paste</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Save</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Load</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Check</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Quick</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Rewrite</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Plug</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Play</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Burn</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Rip</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Drag and drop</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Zip</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Unzip</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Lock</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Fill</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Curl</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Find</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      View</a>
                  </li>
              </ul>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Its vanished trees, the trees that had made way for Gatsby’s house, Pneumonoultramicroscopicsilicovolcanoconiosis had once pandered in whispers to the last and greatest of all human dreams; for a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an aesthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder.
        </dt>
        <dd class="govuk-summary-list__value">
          The Great Gatsby
        </dd>
          <dd class="govuk-summary-list__actions">
              <ul class="govuk-summary-list__actions-list">
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Code</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Jam</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Unlock</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Surf</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Scroll</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Pose</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Click</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Cross</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Crack</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Twitch</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Update</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Name</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Read</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Tune</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Print</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Scan</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Send</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Fax</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Rename</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Touch</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Bring</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Pay</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Watch</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Turn</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Leave</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Stop</a>
                  </li>
                  <li class="govuk-summary-list__actions-list-item">
                    <a class="govuk-link" href="#">
                      Format</a>
                  </li>
              </ul>
          </dd>
      </div>
</dl>
```
