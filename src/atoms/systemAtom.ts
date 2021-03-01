import { getSystemInfoSync } from '@tarojs/taro';
import { atom } from 'recoil';

interface ISystemInfo extends getSystemInfoSync.Result {
  isIphoneX: boolean;
  safeBottomDistance: number;
}

const systemInfo = getSystemInfoSync();

export const systemInfoAtom = atom<ISystemInfo>({
  key: 'global:systemInfo',
  default: {
    ...systemInfo,
    isIphoneX: systemInfo.safeArea.top === 44 ? true : false,
    safeBottomDistance: 68,
  },
});
