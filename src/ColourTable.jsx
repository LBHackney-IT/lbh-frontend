import React from "react"

const colours = {
  "lbh-a01": "#00664f",
  "lbh-a02": "#00b341",
  "lbh-a03": "#84bd00",
  "lbh-a04": "#a4d65e",
  "lbh-e01": "#672146",
  "lbh-e02": "#aa0061",
  "lbh-e03": "#df1995",
  "lbh-e04": "#eb6fbd",
  "lbh-f01": "#81312f",
  "lbh-f02": "#be3a34",
  "lbh-f03": "#e03c31",
  "lbh-f04": "#ff6a13",
  "lbh-h04": "#f8e08e",
  "lbh-text": "#0b0c0c",
  "lbh-text-white": "#ffffff",
  "lbh-secondary-text": "#525a5b",
  "lbh-primary-button": "#00664f",
  "lbh-primary-inner-shadow": "#003d2f",
  "lbh-primary-hover": "#00513f",
  "lbh-primary-focus": "#ffc845",
  "lbh-primary-disabled": "#7fb2a7",
  "lbh-primary-disabled-inner-shadow": "#328472",
  "lbh-secondary-button": "#ffffff",
  "lbh-secondary-inner-shadow": "#003d2f",
  "lbh-secondary-disabled": "#dee0e2",
  "lbh-link": "#025ea6",
  "lbh-link-hover": "#0085ca",
  "lbh-link-visited": "#8031a7",
  "lbh-link-active": "#2b8cc4",
  "lbh-panel": "#e7eaec",
  "lbh-error": "#be3a34",
  "lbh-border": "#bfc1c3",
  "lbh-black": "#0b0c0c",
  "lbh-grey-1": "#6f777b",
  "lbh-grey-2": "#bfc1c3",
  "lbh-grey-3": "#dee0e2",
  "lbh-grey-4": "#f8f8f8",
  "lbh-white": "#ffffff",
}

const Row = ({ name, hex }) => (
  <tr>
    <td>
      <div
        style={{
          background: hex,
        }}
        className="colour-preview"
      ></div>
    </td>
    <td>
      <code>{name}</code>
    </td>
    <td>
      <code>{hex}</code>
    </td>
  </tr>
)

const ColourTable = () => (
  <table>
    <thead>
      <tr>
        <th>Preview</th>
        <th>Name</th>
        <th>Hex code</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(colours).map(key => (
        <Row name={key} hex={colours[key]} />
      ))}
    </tbody>
  </table>
)

export default ColourTable
