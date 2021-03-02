import React, { FC, memo, useCallback, useState } from 'react'
import { navigateTo, getUserInfo, showToast, setStorageSync, showModal } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar, AtButton } from 'taro-ui'

import { useUserInfo, useOnePiece, useLoginInfo } from '@/hooks'
import { LoginInfo } from '@/types'
import { encodePhoneNumber } from '@/utils'
import { Card, SafeBottomDistance } from '@/components'
import s from './index.scss'

interface IProps { }

const { InfoCard } = Card

const Mine: FC<IProps> = () => {
  const [, setRefresh] = useState<boolean>(false)
  const userInfo = useUserInfo()
  const piece = useOnePiece()
  const loginInfo = useLoginInfo()

  const handleNavigate = useCallback((url: string) => {
    navigateTo({
      url
    })
  }, [])

  const handleChangeUserInfo = useCallback((loginInfoInner: LoginInfo | undefined) => {
    if (loginInfoInner) {
      handleNavigate('/pages/Config/index')
    } else {
      showModal({
        title: '请前往注册',
        success(res) {
          if (res.confirm) {
            handleNavigate('/pages/Login/index')
          }
        }
      })
    }
  }, [handleNavigate])

  const handleGetUserInfo = useCallback(() => {
    getUserInfo().then(res => {
      setStorageSync('USERINFO', res.userInfo)
      setRefresh(true)
    }).catch(() => {
      showToast({
        title: '请确认授权',
        icon: 'none',
      })
    })
  }, [])

  return (
    <View className={s.container}>
      <View className={s.title}>
        <View className={s.message}>{piece}</View>
        <View className={s.avatar}>
          <AtAvatar
            circle
            image='https://pic4.zhimg.com/80/v2-7f03cd2301fe14c49f8a0bf946b2de9d_1440w.jpg?source=1940ef5c'
          />
        </View>
      </View>
      <View className={s.infoList}>
        <Card title='基本信息' className={s.info}>
          <View className={s.baseInfo}>
            <View>头像</View>
            {userInfo ? (
              <AtAvatar
                circle
                size='small'
                image={userInfo.avatarUrl}
              />
            ) : (
              <View>
                <AtButton
                  className={s.login}
                  size='small'
                  openType='getUserInfo'
                  onGetUserInfo={handleGetUserInfo}
                >
                  点击授权
                </AtButton>
              </View>
            )}
          </View>
          {userInfo && <InfoCard title='昵称' value={userInfo.nickName} />}
        </Card>
        <Card title='个人数据' className={s.info}>
          <InfoCard title='姓名' value={loginInfo?.name} />
          <InfoCard title='性别' value={loginInfo?.sex} />
          <InfoCard title='手机号' value={encodePhoneNumber(loginInfo?.phone)} />
        </Card>
        <Card title='部门信息' className={s.info}>
          <InfoCard title='职位' value={loginInfo?.job} />
          <InfoCard title='个人签名' value={loginInfo?.sign} />
        </Card>
      </View>
      <AtButton className={s.setButton} onClick={() => handleChangeUserInfo(loginInfo)}>
        修改个人信息
      </AtButton>
      <SafeBottomDistance />
    </View>
  )
}

export default memo(Mine)