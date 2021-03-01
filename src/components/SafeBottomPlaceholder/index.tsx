import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { View } from '@tarojs/components'

import { systemInfoAtom } from '@/atoms/systemAtom'

import s from './index.scss'

interface IProps { }

const SafeBottomPlaceholder: FC<IProps> = () => {
  const { isIphoneX, safeBottomDistance } = useRecoilValue(systemInfoAtom)

  return (
    isIphoneX ? (
      <View className={s.placeholder} style={{ height: `${safeBottomDistance}rpx` }}></View>
    ) : null
  )
}

export default SafeBottomPlaceholder