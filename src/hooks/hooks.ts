import { useEffect, useState } from 'react';
import { UserInfo, LoginInfo } from '@/types';
import { getStorageSync } from '@tarojs/taro';
import { fetchOnePiece } from '@/apis';

export const useUserInfo = () => {
  const userInfo: UserInfo | undefined = getStorageSync('USERINFO');

  return userInfo;
};

export const useLoginInfo = () => {
  const loginInfo: LoginInfo | undefined = getStorageSync('LOGININFO');

  return loginInfo;
};

export const useOnePiece = () => {
  const [piece, setPiece] = useState<string>();

  useEffect(() => {
    (async () => {
      const [, res] = await fetchOnePiece();
      setPiece(res);
    })();
  }, []);

  return piece;
};
