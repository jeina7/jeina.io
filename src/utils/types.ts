export type d = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
export type YYYY = `20${d}${d}`;
export type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
export type DD = `${0}${oneToNine}` | `${1 | 2}${d}` | `3${0 | 1}`;
export type YYYY_MM_DD = `${YYYY}-${MM}-${DD}`;

export type postMetadata = {
  title: string;
  views: number;
  date: YYYY_MM_DD;
  description: string;
  tags: string[];
};

export type posts = Record<string, postMetadata>;
