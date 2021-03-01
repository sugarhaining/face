import React, { FC } from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import LoginIcon from '@/asserts/images/login.png'

import s from './index.scss'

interface IProps { }


const Notice: FC<IProps> = () => {
  return (
    <View className={`${s.container}`}>
      <View className={s.content}>
        <View className={`${s.title}  web-font`}>502实验室</View>
        <View className={s.slogen}>Grow up here</View>
        <Image src={LoginIcon} className={s.logo} />
      </View>
      <AtButton className={s.button}>点击登录</AtButton>
    </View>
  )
}

export default Notice