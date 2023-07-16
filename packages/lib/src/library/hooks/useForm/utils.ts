export const addValueToData = (
  data: object,
  leafKey: string,
  value: unknown
) => {
  const propNames = leafKey.split(".");
  let nestedObject = data as any;

  for (let i = 0; i < propNames.length - 1; i++) {
    const propName = propNames[i];

    nestedObject[propName] = nestedObject[propName] || {};

    nestedObject = nestedObject[propName];
  }

  nestedObject[propNames[propNames.length - 1]] =
    value === "" ? undefined : value;
};
