import React, { FC } from 'react'
import { View } from '@tarojs/components'

import s from './InfoCard.scss'

export interface IProps {
  title: string
  value?: string
}

const placeholderTip = '未注册'

const InfoCard: FC<IProps> = ({
  title,
  value
}) => {
  return (
    <View className={s.container}>
      <View className={s.title}>{title}</View>
      <View className={`${s.value} ${value ? '' : s.placeholder}`}>{value || placeholderTip}</View>
    </View>
  )
}

export default InfoCard