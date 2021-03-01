import React, { FC } from 'react'
import { View } from '@tarojs/components'

import s from './index.scss'

interface IProps {
  name: string
  extraName?: string
}

const SubPageTitle: FC<IProps> = ({
  name,
  extraName
}) => {
  return (
    <View className={s.subTitle}>
      <View className={s.name}>{name}</View>
      <View className={s.extraName}>{extraName}</View>
    </View>
  )
}

export default SubPageTitle