class Checkboxes {
  $module: HTMLElement;
  $inputs: NodeListOf<HTMLInputElement>;

  constructor($module: HTMLElement);

  init(): void;
  syncAllConditionalReveals(): void;
  syncConditionalRevealWithInputState($input: HTMLInputElement): void;
  unCheckAllInputsExcept($input: HTMLInputElement): void;
  unCheckExclusiveInputs($input: HTMLInputElement): void;
  handleClick(event: MouseEvent): void;
}

export default Checkboxes;
