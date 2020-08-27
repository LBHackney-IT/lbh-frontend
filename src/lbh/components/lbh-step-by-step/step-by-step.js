import { nodeListForEach } from "../../common"

function StepByStep($module) {
  this.$module = $module
  this.$sections = $module.querySelectorAll('[data-target="section"]')
  this.$showElems = $module.querySelectorAll('[data-target="show"]')
  this.sectionExpandedClass = "section__expanded"
  this.openAllClass = 'show-all'
}

StepByStep.prototype.init = function () {
  if (!this.$module) {
    return
  }
  this.initControls()
  this.initSections()
  this.$openAllButton.addEventListener('click', this.onOpenOrCloseAllToggle.bind(this))
}

StepByStep.prototype.initControls = function () {
  this.$openAllButton = document.createElement('button')
  this.$openAllButton.setAttribute('aria-expanded', 'false')
  this.$openAllButton.setAttribute('class', this.openAllClass)
  this.$openAllButton.innerHTML = 'Hide all'
  this.$module.insertBefore(this.$openAllButton, this.$module.firstChild)
  this.showToggles()
}

StepByStep.prototype.initSections = function () {
  const $module = this
  nodeListForEach($module.$sections, function($section, i) {
    const $button = $section.querySelector('[data-target="button"]')
    $button.addEventListener('click', $module.onSectionToggle.bind($module, $section))
  })
}

StepByStep.prototype.onSectionToggle = function ($section) {
  const expanded = this.isExpanded($section)
  this.toggleExpanded(!expanded, $section);
}

StepByStep.prototype.isExpanded = function ($section) {
  const expanded = $section.classList.contains(this.sectionExpandedClass)
  return expanded
}

StepByStep.prototype.toggleExpanded = function (expanded, $section) {
  const $button = $section.querySelector('[data-target="button"]')
  $button.setAttribute('aria-expanded', expanded)
  const $showHide = $button.querySelector('[data-target="show"]')
  const $content = $section.querySelector('[data-target="content"]')
  if (expanded) {
    $section.classList.add(this.sectionExpandedClass);
    $content.classList.add('content-visible');
    $showHide.innerHTML = 'Hide'
  } else {
    $section.classList.remove(this.sectionExpandedClass);
    $content.classList.remove('content-visible');
    $showHide.innerHTML = 'Show'
  }

  const areAllSectionsOpen = this.checkIfAllSectionsOpen()
  console.log('are', areAllSectionsOpen)
  this.updateOpenAllButton(areAllSectionsOpen)
}

StepByStep.prototype.addToggleButtons = function () {
  const header = this.$module.querySelectorAll('[data-target="header"]')
  const childElems = header.innerHTML;
  const $button = `<button>${childElems}</button>`
  header.innerHTML = $button
}

StepByStep.prototype.onOpenOrCloseAllToggle = function () {
  const $module = this
  const $sections = this.$sections

  const nowExpanded = !this.checkIfAllSectionsOpen()

  nodeListForEach($sections, function ($section) {
    $module.toggleExpanded(nowExpanded, $section)
  })

  $module.updateOpenAllButton(nowExpanded)
}

StepByStep.prototype.checkIfAllSectionsOpen = function () {
  const sectionsCount = this.$sections.length
  const expandedSectionCount = this.$module.querySelectorAll('.' + this.sectionExpandedClass).length
  const areAllSectionsOpen = sectionsCount === expandedSectionCount

  return areAllSectionsOpen
}

StepByStep.prototype.updateOpenAllButton = function (expanded) {
  const newButtonText = expanded ? 'Hide all' : 'Show all'
  this.$openAllButton.setAttribute('aria-expanded', expanded)
  this.$openAllButton.innerHTML = newButtonText
}

StepByStep.prototype.showToggles = function () {
  nodeListForEach(this.$showElems, function ($elem) {
    $elem.classList.remove('content')
  })
}

export default StepByStep
