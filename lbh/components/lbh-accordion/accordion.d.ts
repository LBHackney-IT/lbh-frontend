export class Accordion {
  $module: HTMLElement;
  moduleId: string;
  $sections: NodeListOf<HTMLElement>;
  $openAllButton: string;
  browserSupportsSessionStorage: boolean | undefined;

  controlsClass: string;
  openAllClass: string;
  iconClass: string;

  sectionHeaderClass: string;
  sectionHeaderFocusedClass: string;
  sectionHeadingClass: string;
  sectionSummaryClass: string;
  sectionButtonClass: string;
  sectionExpandedClass: string;

  constructor($module: HTMLElement);

  init(): void;
  initControls(): void;
  initSectionHeaders(): void;
  initHeaderAttributes($headerWrapper: HTMLElement, index: number): void;
  onSectionToggle($section: HTMLElement): void;
  onOpenOrCloseAllToggle(): void;
  setExpanded(expanded: boolean, $section: HTMLElement | null): void;
  isExpanded(section: HTMLElement | null): boolean;
  checkIfAllSectionsOpen(): boolean;
  updateOpenAllButton(expanded: boolean): void;
  storeState($section: HTMLElement): void;
  setInitialState($section: HTMLElement): void;
}

export default Accordion;
