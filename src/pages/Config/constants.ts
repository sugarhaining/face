export const initialFormState = {
  name: '',
  sex: '',
  phone: '',
  job: '',
  sign: '',
};

export const reducer = (state: any, action: any) => {
  const { payload } = action;

  return {
    ...state,
    ...payload,
  };
};
