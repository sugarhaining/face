import { wrapFetch } from '@/utils';
import { BaseResult } from '@/types';

interface FetchRegisterData {
  code: string;
}
interface FetchRegisterRes {
  member_id: string;
}
export const fetchRegister = (data: FetchRegisterData) => {
  const { code } = data;
  return wrapFetch<BaseResult<FetchRegisterRes>, FetchRegisterData>(
    '/member',
    { code },
    'POST',
  );
};
