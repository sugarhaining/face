import React, { FC, useCallback, useState } from 'react'
import { showToast } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'

import LoginIcon from '@/asserts/images/login.png'

import s from './index.scss'

interface IProps { }


const Notice: FC<IProps> = () => {
  const [code, setCode] = useState<string>('')
  const handleRegister = useCallback((registerCode) => {
    if (!registerCode) {
      showToast({
        title: '邀请码不能为空',
        icon: 'none'
      })
    }
  }, [])
  return (
    <View className={`${s.container}`}>
      <View className={s.content}>
        <View className={`${s.title}  web-font`}>502实验室</View>
        <View className={s.slogen}>Grow up here</View>
        <Image src={LoginIcon} className={s.logo} />
      </View>
      <AtInput className={s.input} title='邀请码' type='text' name='code' value={code} onChange={v => setCode(`${v}`)} />
      <AtButton className={s.button} onClick={() => handleRegister(code)}>点击登录</AtButton>
    </View>
  )
}

export default Notice