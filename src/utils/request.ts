import { request, showToast } from '@tarojs/taro';
import { UrlPrefix } from '@/apis/common';

type RequestMethod = 'GET' | 'POST' | 'PUT';

export const fetch = async <T, U>(
  url: string,
  data?: U,
  method?: RequestMethod,
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
    showToast({
      title: '未知错误，请稍后重试',
      icon: 'none',
    });
    error = err;
  }

  return [error, result] as const;
};

export const wrapFetch = <T, U>(
  url: string,
  data?: U,
  method?: RequestMethod,
) => {
  return fetch<T, U>(`${UrlPrefix}${url}`, data, method);
};
