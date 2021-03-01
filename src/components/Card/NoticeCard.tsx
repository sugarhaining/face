import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { Notice } from '@/types'

import s from './NoticeCard.scss'

export interface IProps {
  notice: Notice
  clickFn?: () => void
  className: string
}

const InfoCard: FC<IProps> = ({
  notice,
  className,
  clickFn
}) => {
  const {
    name,
    time,
    title,
    summary,
    content,
  } = notice;

  return (
    <View className={`${s.container} ${className}`} onClick={clickFn}>
      <View className={s.title}>{title}</View>
      <View className={s.extra}>{name} | {time}</View>
      <View className={s.content}>{summary || content}</View>
      <View className={s.router}>点击查看全部</View>
    </View>
  )
}

export default InfoCard