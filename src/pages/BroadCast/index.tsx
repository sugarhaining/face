import React, { FC, useCallback, useReducer } from 'react'
import { getStorageSync, showToast } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtInput, AtTextarea, AtImagePicker, AtButton } from 'taro-ui'

import { SubPageTitle, SafeBottomDistance } from '@/components'
import { initialFormState, reducer } from './constants'
import { fetchNotice } from './service'
import s from './index.scss'

interface IProps { }


const BroadCast: FC<IProps> = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState)

  const handleFormChange = useCallback((field: string, value: any, currFormState?: any) => {
    dispatch({ type: field, payload: value })
  }, [])

  const handleFormSubmit = useCallback((values: any) => {
    const images = values.images.map((v: { url: string }) => v.url)
    values.images = [...images]
    const loginInfo = getStorageSync('LOGININFO')

    fetchNotice({ ...values, name: loginInfo.name })
  }, [])

  const handleFormValidate = useCallback((values: any) => {
    const {
      title = ''
    } = values

    if (title.trim().length === 0) {
      showToast({
        title: '通知主题为必填',
        icon: 'none'
      })
      return;
    }

    handleFormSubmit(values)
  }, [handleFormSubmit])

  const { values } = formState
  return (
    <View className={s.container}>
      <SubPageTitle name='发布通知' />
      <AtForm
        className={s.form}
      >
        <AtInput
          border={false}
          required
          title='主题'
          name='title'
          value={values.title}
          placeholder='输入通知主题'
          onChange={value => handleFormChange('title', value, formState)}
        />
        <AtInput
          border={false}
          title='概要'
          name='summary'
          value={values.summary}
          placeholder='输入通知概要'
          onChange={value => handleFormChange('summary', value)}
        />
        <AtTextarea
          height={300}
          value={values.content}
          placeholder='输入通知内容...'
          onChange={value => handleFormChange('content', value)}
        />
        <AtImagePicker
          className={s.imagePicker}
          files={values.images}
          onChange={files => handleFormChange('images', files)}
        />
      </AtForm>
      <AtButton
        className={s.button}
        type='primary'
        size='normal'
        onClick={() => handleFormValidate(values)}
      >
        发布
      </AtButton>
      <SafeBottomDistance />
    </View>
  )
}

export default BroadCast