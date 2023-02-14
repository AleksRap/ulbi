type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter((value) => !!value),
    ...Object.keys(mods).filter((keys) => !!mods[keys]),
  ].join(' ');
}
