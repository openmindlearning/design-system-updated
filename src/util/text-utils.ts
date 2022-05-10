export const pluralize = (num: number, singular: string, plural: string): string =>
  num === 1 ? singular : plural;
