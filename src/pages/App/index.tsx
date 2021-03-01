import React, { FC, useCallback, useState } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import cssVariable from '@/style/variable.scss'
import Home from '../Home'
import WorkBench from '../WorkBench'
import Mine from '../Mine'
import { tabList } from './constant'
import s from './index.scss'

interface IProps { }

const {
  tabFocusColor,
  tabBlurColor
} = cssVariable
const PageTuple = [Home, WorkBench, Mine]

const App: FC<IProps> = () => {
  const [currTabIndex, setCurrTabIndex] = useState<number>(0)

  const handleTabClick = useCallback((index: number) => {
    setCurrTabIndex(index)
  }, [])

  const renderTabPage = useCallback((index) => {
    const Page = PageTuple[index]
    return <Page />
  }, [])

  return (
    <View className={s.container}>
      <View className={s.viewport}>
        {renderTabPage(currTabIndex)}
      </View>
      <AtTabBar
        fixed
        color={tabBlurColor}
        selectedColor={tabFocusColor}
        iconSize={24}
        fontSize={12}
        tabList={tabList}
        current={currTabIndex}
        onClick={handleTabClick}
      />
    </View>
  )
}

export default App
