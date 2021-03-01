import { request } from '@tarojs/taro';

export const fetch = async <T, U>(
  url: string,
  data?: U,
  method?: 'GET' | 'POST' | 'PUT',
) => {
  let result, error;
  try {
    result = await request<T, U>({
      url,
      data,
      method: method ? method : 'GET',
      header: {
        'content-type': 'application/json',
      },
    }).then(res => res.data);
  } catch (err) {
    error = err;
  }

  return [error, result];
};
