import React, { FC, memo } from 'react'
import { navigateTo } from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import { AtAvatar, AtCalendar } from 'taro-ui'
import { useToggle } from 'ahooks'

import { useUserInfo, useLoginInfo } from '@/hooks'
import { Icon, Menu, SafeBottomDistance } from '@/components'
import { geneWelcomeMessage } from '@/utils'
import NoticeIcon from '@/asserts/icons/notice.png'
import BoardIcon from '@/asserts/icons/board.png'
import CheckInIcon from '@/asserts/icons/checkIn.png'
import cssVariable from '@/style/variable.scss'
import { MenuItem } from './interface'
import s from './index.scss'

interface IProps { }
const menuList: MenuItem[] = [
  {
    icon: BoardIcon,
    name: '小黑板',
    path: '/pages/Board/index'
  },
  {
    icon: NoticeIcon,
    name: '通知',
    path: '/pages/Notice/index'
  },
]
const { tabBlurColor } = cssVariable

const Home: FC<IProps> = () => {
  const [showCalendarMask, { toggle: toggleShowCalendarMask }] = useToggle<boolean>(false)
  const userInfo = useUserInfo()
  const loginInfo = useLoginInfo()

  return (
    <View className={s.container}>
      <View className={s.title}>
        <View className={s.slogen}>
          Hi,&nbsp;&nbsp;{geneWelcomeMessage()}
        </View>
        <View className={s.user}>
          <AtAvatar
            circle
            image={userInfo?.avatarUrl || 'https://pic4.zhimg.com/80/v2-7f03cd2301fe14c49f8a0bf946b2de9d_1440w.jpg?source=1940ef5c'}
          />
          {
            loginInfo ? (
              <View className={s.detail}>
                <View className={s.name}>{loginInfo.name}</View>
                <View className={s.desc}>
                  <View className={s.job}>{loginInfo?.job || '--'}</View>
                  <View className={s.divider} />
                  <View className={s.message}>{loginInfo?.sign || '今天也要加油哦今天是个好天气呢'}</View>
                </View>
              </View>
            ) : (
              <View
                className={s.login}
                onClick={() => {
                  navigateTo({
                    url: '/pages/Login/index?from=/pages/Home/index'
                  })
                }}
              >
                点击去注册&nbsp;&gt;
              </View>
            )
          }
        </View>
      </View>
      <View className={s.menus}>
        {
          menuList.map(menu => {
            return (
              <Menu
                useRoute
                key={menu.name}
                iconPath={menu.icon}
                name={menu.name}
                path={menu.path}
              />
            )
          })
        }
      </View>
      <View className={s.calendar}>
        <AtCalendar />
        <View
          className={s.mask}
          style={{ height: showCalendarMask ? '100px' : '30px' }}
        >
          <View
            className={s.pointer}
            onClick={() => toggleShowCalendarMask()}
          >
            {
              showCalendarMask ? (
                <Icon
                  value='down'
                  color={tabBlurColor}
                />
              ) : (
                <Icon value='up' color={tabBlurColor} />
              )
            }
          </View>
          <View className={s.record}>
            <View className={s['record-title']}>
              <Image src={CheckInIcon} className={s.checkInIcon} />
              <View>本月已打卡</View>
            </View>
            <View>
              23天
            </View>
          </View>
        </View>
      </View>
      <SafeBottomDistance />
    </View>
  )
}

export default memo(Home)