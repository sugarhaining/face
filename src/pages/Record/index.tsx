import React, { FC } from 'react'
import { View } from '@tarojs/components'

import { SubPageTitle } from '@/components'
import s from './index.scss'

interface IProps { }

const Record: FC<IProps> = () => {
  return (
    <View>
      <SubPageTitle
        name='考勤管理'
      />
    </View>
  )
}

export default Record