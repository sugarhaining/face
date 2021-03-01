import React, { FC, memo } from 'react'
import { View } from '@tarojs/components'

import { Card, Menu } from '@/components'
import RecordIcon from '@/asserts/icons/record.png'
import ResourceIcon from '@/asserts/icons/resource.png'
import SendNoticeIcon from '@/asserts/icons/send-notice.png'

import { MenuItem } from './interface'
import s from './index.scss'

interface IProps { }

const menuList: MenuItem[] = [
  {
    name: '考勤记录',
    iconPath: RecordIcon,
    path: '/pages/Record/index'
  },
  {
    name: '通知发放',
    iconPath: SendNoticeIcon,
    path: '/pages/BroadCast/index'
  },
  {
    name: '资源管理',
    iconPath: ResourceIcon,
    path: ''
  },
]

const WorkBench: FC<IProps> = () => {
  return (
    <View className={s.container}>
      <View className={s.title}>
        <View className={s.slogen}>
          <View>方便 高效 快捷</View>
          <View>「&nbsp;管理自己的时间&nbsp;」</View>
        </View>
      </View>
      <View className={s.cards}>
        <Card
          title='实验室管理'
        >
          <View className={s.menuList}>
            {menuList.map(({ name, iconPath, path }) => (
              <View
                key={name}
                className={s.menuItem}
              >
                <Menu
                  iconPath={iconPath}
                  name={name}
                  path={path}
                  useRoute
                />
              </View>
            ))}
          </View>
        </Card>
      </View>
    </View>
  )
}

export default memo(WorkBench)