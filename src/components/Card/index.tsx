import React, { FC } from 'react'
import { View } from '@tarojs/components'

import InfoCard from './InfoCard'
import NoticeCard from './NoticeCard'
import s from './index.scss'

interface IProps {
  title: string
  extraInfo?: string
  className?: string
}

const Card: FC<IProps> = ({
  title,
  extraInfo,
  className,
  children
}) => {
  return (
    <View className={`${s.container} ${className}`}>
      <View className={s.topPanel}>
        <View className={s.block}>
          <View className={s.line} />
          <View className={s.title}>
            {title}
          </View>
        </View>
        {
          extraInfo && (
            <View className={s.extra}>
              {extraInfo}
            </View>
          )
        }
      </View>
      <View className={s.custom}>
        {children}
      </View>
    </View>
  )
}

Card.InfoCard = InfoCard
Card.NoticeCard = NoticeCard

export default Card