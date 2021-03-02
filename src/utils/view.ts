export const encodePhoneNumber = (number: string | undefined) => {
  if (!number) {
    return undefined;
  } else {
    return number.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
  }
};
