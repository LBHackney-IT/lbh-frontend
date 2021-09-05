class Radios {
  $module: HTMLElement;
  $inputs: NodeListOf<HTMLInputElement>;
  constructor($module: HTMLElement);

  init(): void;
  syncAllConditionalReveals(): void;
  syncConditionalRevealWithInputState(): void;
  handleClick(event: MouseEvent): void;
}

export default Radios;
