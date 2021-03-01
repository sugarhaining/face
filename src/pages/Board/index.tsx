import React, { FC } from 'react'
import { View, Image } from '@tarojs/components'

import { SubPageTitle, Empty } from '@/components'
import SendIcon from '@/asserts/icons/send.png'
import s from './index.scss'

interface IProps { }

const Board: FC<IProps> = () => {
  return (
    <View className={s.container}>
      <SubPageTitle name='小黑板' extraName='写下你的想法吧' />
      <Empty />
      <View className={s.send}>
        <Image src={SendIcon} className={s.sendIcon} />
      </View>
    </View>
  )
}

export default Board