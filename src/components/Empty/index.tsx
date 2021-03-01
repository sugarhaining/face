import React, { FC } from 'react'
import { View, Image } from '@tarojs/components'

import EmptyIcon from '@/asserts/images/empty.png'
import s from './index.scss'

interface IProps { }

const Empty: FC<IProps> = () => {
  return (
    <View className={s.container}>
      <Image src={EmptyIcon} className={s.icon} />
      <View className={s.tip}>数据为空</View>
    </View>
  )
}

export default Empty