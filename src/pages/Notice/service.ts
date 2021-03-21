import { BaseResult, Notice } from '@/types';
import { wrapFetch } from '@/utils';

interface fetchNoticeRes {
  notice_list: Notice[];
}

export const fetchNotice = async () => {
  const res = await wrapFetch<BaseResult<fetchNoticeRes>, {}>('/notice');

  return res;
};
