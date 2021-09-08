class Tabs {
  $module: HTMLElement;
  $tabs: NodeListOf<HTMLElement>;
  keys: { left: number; right: number; up: number; down: number };
  jsHiddenClass: string;

  constructor($module: HTMLElement);

  init(): void;
  setupResponsiveChecks(): void;
  checkMode(): void;
  setup(): void;
  teardown(): void;
  onHashChange(event: HashChangeEvent): void;
  hideTab($tab: HTMLElement): void;
  showTab($tab: HTMLElement): void;
  getTab(hash: string): HTMLElement | null;
  setAttributes($tab: HTMLElement): void;
  unsetAttributes($tab: HTMLElement): void;
  onTabClick(event: MouseEvent): void;
  createHistoryEntry($tab: HTMLElement): void;
  onTabKeydown(event: KeyboardEvent): void;
  activateNextTab(): void;
  activatePreviousTab(): void;
  getPanel($tab: HTMLElement): HTMLElement | null;
  showPanel($tab: HTMLElement): void;
  hidePanel($tab: HTMLElement): void;
  unhighlightTab($tab: HTMLElement): void;
  getCurrentTab(): HTMLElement | null;
  getHref($tab: HTMLElement): string;
}

export default Tabs;
