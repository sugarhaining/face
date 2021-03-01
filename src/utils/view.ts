export const encodePhoneNumber = (number: string) => {
  return number.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
};
