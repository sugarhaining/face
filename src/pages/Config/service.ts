import { wrapFetch } from '@/utils';
import { LoginInfo, BaseResult } from '@/types';

interface FetchMemberInfoData extends LoginInfo {}
interface FetchMemberInfoRes {
  member_info: string;
}
export const fetchMemberInfo = (data: FetchMemberInfoData) => {
  const { id, name, sex, phone, job, sign } = data;
  return wrapFetch<BaseResult<FetchMemberInfoRes>, FetchMemberInfoData>(
    '/member',
    {
      id,
      name,
      sex,
      phone,
      job,
      sign,
    },
    'PUT',
  );
};
