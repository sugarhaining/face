export const initialFormState = {
  values: {
    title: '',
    summary: '',
    content: '',
    images: [],
  },
  errors: {
    title: false,
    content: false,
  },
};
export const reducer = (state: any, action: any) => {
  const { payload } = action;
  const { values, errors } = state;

  switch (action.type) {
    case 'title':
      return {
        ...state,
        values: {
          ...values,
          title: payload,
        },
      };
    case 'summary':
      return {
        ...state,
        values: {
          ...values,
          summary: payload,
        },
      };
    case 'content':
      return {
        ...state,
        values: {
          ...values,
          content: payload,
        },
      };
    case 'images':
      return {
        ...state,
        values: {
          ...values,
          images: payload,
        },
      };
    case 'errors':
      return {
        ...state,
        errors: {
          ...errors,
          ...payload,
        },
      };
  }
};
