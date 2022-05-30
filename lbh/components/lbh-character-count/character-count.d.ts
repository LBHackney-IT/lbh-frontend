class CharacterCount {
  $module: HTMLElement;
  $textarea: HTMLElement | null;
  $countMessage: HTMLElement | null;

  valueChecker: number | null;

  constructor($module: HTMLElement);

  init(): void;
  sync(): void;
  getDataset(): Record<string, string>;
  count(text: string): number;
  bindChangeEvents(): void;
  checkIfValueChanged(): void;
  updateCountMessage(): void;
  handleFocus(): void;
  handleBlur(): void;
}

export default CharacterCount;
