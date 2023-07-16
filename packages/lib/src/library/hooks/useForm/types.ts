type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

// TODO: Recursive type is too heavy. Need to split it into different Leaves ?
export type Leaves<T, D extends number = 2> = [D] extends [never]
  ? never
  : T extends object
  ? // TODO: What is "-?" ?
    { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : "";

export type InputElements = HTMLInputElement &
  HTMLTextAreaElement &
  HTMLSelectElement;
