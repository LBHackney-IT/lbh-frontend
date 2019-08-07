'use strict'

// Convert component name to macro name
//
// This helper function takes a component name and returns the corresponding
// macro name.
//
// Component names are lowercase, dash-separated strings (lbh-button, lbh-date-input),
// whilst macro names have a `lbh` prefix and are camel cased (lbhButton,
// lbhDateInput).
const componentNameToMacroName = componentName => {
  const macroName = componentName
    .toLowerCase()
    .split('-')
    // capitalize each 'word'
    .map((word, index) => index > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
    .join('')

  return `${macroName}`
}
exports.componentNameToMacroName = componentNameToMacroName
