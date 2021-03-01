import React, { FC } from 'react'
import { View } from '@tarojs/components'

import s from './InfoCard.scss'

export interface IProps {
  title: string
  value: string
}

const InfoCard: FC<IProps> = ({
  title,
  value
}) => {
  return (
    <View className={s.container}>
      <View className={s.title}>{title}</View>
      <View className={s.value}>{value}</View>
    </View>
  )
}

export default InfoCard