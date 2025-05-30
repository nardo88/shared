/**
 *
 * @param cls  - класс по умолчанию
 * @param mods - объект в котором ключ это название класса,
 * а значение это boolean по которому мы определяем надо ли этот класс добавлять
 * @param additional - массив дополнительных классов
 */

export type Mods = Record<string, boolean | string | undefined | null>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_key, value]) => !!value)
      .map(([key, _value]) => key),
  ].join(" ");
}
