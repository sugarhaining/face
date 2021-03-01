import React, { FC } from 'react'
import { AtIcon } from 'taro-ui'


interface IProps {
  value: string
  color?: string
}
const Icon: FC<IProps> = ({ value, color }) => {
  return (
    <AtIcon
      prefixClass='iconfont'
      value={value}
      color={color}
    />
  )
}

export default Icon