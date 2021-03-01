import React, { FC, useCallback } from 'react'
import { showToast, navigateTo } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import s from './index.scss'

interface IProps {
  iconPath: string
  name: string
  path?: string
  useRoute?: boolean
  clickFn?: (name: string) => void
}

const Menu: FC<IProps> = ({
  name,
  iconPath,
  clickFn,
  useRoute,
  path
}) => {

  const handleChangeRouter = useCallback((routerPath?: string) => {
    if (!routerPath) {
      showToast({
        title: '新功能开发中',
        icon: 'none',
        duration: 1000
      })
      return;
    }
    navigateTo({
      url: routerPath
    })
  }, [])

  const handleClick = useCallback((menuName: string) => {
    if (clickFn) {
      clickFn(menuName)
    }
  }, [clickFn])

  return (
    <View
      className={s.container}
      onClick={() => {
        if (useRoute) {
          handleChangeRouter(path)
          return;
        }
        handleClick(name)
      }}
    >
      <Image className={s.icon} src={iconPath} />
      <View className={s.name}>
        {name}
      </View>
    </View>
  )
}

export default Menu