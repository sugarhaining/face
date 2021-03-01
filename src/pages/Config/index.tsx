import React, { FC, useCallback, useReducer, useState } from 'react'
import { showToast } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtForm, AtButton, AtActionSheet, AtActionSheetItem } from 'taro-ui'

import { SubPageTitle } from '@/components'
import { initialFormState, reducer } from './constants'
import s from './index.scss'

interface IProps { }

const Config: FC<IProps> = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState)
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false)

  const handleFieldChange = useCallback((field: string, value: string | number) => {
    dispatch({ type: field, payload: { [`${field}`]: value } })
  }, [])

  const handleFormValidate = useCallback((currFormState: any) => {
    const {
      name,
      sex,
      phone,
    } = currFormState
    const phoneReg = /^1(3\d|4[5-8]|5[0-35-9]|6[567]|7[01345-8]|8\d|9[025-9])\d{8}$/

    if (name?.trim().length === 0) {
      showToast({
        title: '姓名为必填',
        icon: 'none'
      })
      return;
    }
    if (sex?.trim().length === 0) {
      showToast({
        title: '性别为必填',
        icon: 'none'
      })
      return;
    }
    if (phone?.trim().length === 0 || !phoneReg.test(phone)) {
      showToast({
        title: '请输入有效的手机号',
        icon: 'none'
      })
      return;
    }
  }, [])

  return (
    <View className={s.container}>
      <SubPageTitle name='信息修改' />
      <AtForm className={s.form}>
        <AtInput
          required
          name='name'
          title='姓名'
          placeholder='输入姓名'
          value={formState.name}
          onChange={value => handleFieldChange('name', value)}
        />
        <AtInput
          required
          name='sex'
          title='性别'
          placeholder='点击选择性别'
          value={formState.sex}
          editable={false}
          onClick={() => {
            console.log('focus')
            setShowActionSheet(true)
          }}
          onChange={() => { }}
        />
        <AtActionSheet
          isOpened={showActionSheet}
          cancelText='关闭'
          title='性别'
          onCancel={() => {
            setShowActionSheet(false)
          }}
          onClose={() => {
            setShowActionSheet(false)
          }}
        >
          <AtActionSheetItem onClick={() => {
            handleFieldChange('sex', '男')
            setShowActionSheet(false)
          }}
          >
            男
          </AtActionSheetItem>
          <AtActionSheetItem onClick={() => {
            handleFieldChange('sex', '女')
            setShowActionSheet(false)
          }}
          >
            女
          </AtActionSheetItem>
          <AtActionSheetItem onClick={() => {
            handleFieldChange('sex', '保密')
            setShowActionSheet(false)
          }}
          >
            保密
          </AtActionSheetItem>
        </AtActionSheet>
        <AtInput
          required
          type='number'
          name='phone'
          title='手机号'
          placeholder='输入手机号'
          value={formState.phone}
          onChange={value => handleFieldChange('phone', value)}
        />
        <AtInput
          name='job'
          title='职位'
          placeholder='输入职位'
          value={formState.job}
          onChange={value => handleFieldChange('job', value)}
        />
        <AtInput
          name='sign'
          title='个人签名'
          placeholder='输入签名，将在首页展示'
          border={false}
          value={formState.sign}
          onChange={value => handleFieldChange('sign', value)}
        />
        <AtButton className={s.submit} onClick={() => handleFormValidate(formState)}>提交</AtButton>
      </AtForm>
    </View>
  )
}

export default Config