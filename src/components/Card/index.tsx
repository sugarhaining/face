import React, { FC } from 'react'
import { View } from '@tarojs/components'

import InfoCard, { IProps as InfoIProps } from './InfoCard'
import NoticeCard, { IProps as NoticeIProps } from './NoticeCard'
import s from './index.scss'

interface IProps {
  title: string
  extraInfo?: string
  className?: string
}

interface FCLocal<T> extends FC<T> {
  InfoCard: FC<InfoIProps>
  NoticeCard: FC<NoticeIProps>
}

const Card: FCLocal<IProps> = ({
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