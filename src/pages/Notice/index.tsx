import React, { FC, useCallback, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { View, Image } from '@tarojs/components'
import { AtFloatLayout } from "taro-ui"

import { SubPageTitle, Card } from '@/components'
import { Notice as INotice } from '@/types'
import s from './index.scss'

interface IProps { }

const { NoticeCard } = Card

const Notice: FC<IProps> = () => {
  const [noticeOnShow, setNoticeOnshow] = useState<INotice>()
  const [visible, setVisible] = useState<boolean>(false)

  const handleOpenModal = useCallback((notice: INotice) => {
    setNoticeOnshow(notice)
    setVisible(true)
  }, [])
  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  const notices: INotice[] = [
    {
      id: '1',
      name: ' 苏国涛',
      time: '2020-01-12',
      title: '晚上开会',
      summary: '今晚来开会，主题是「金融」',
      content: '晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会',
      images: [
        'https://pic1.zhimg.com/80/v2-7be4e4c933e041b3ebffc0650c896cee_1440w.jpg?source=1940ef5c',
        'https://pic2.zhimg.com/80/v2-7da73ab784a4b6d9d2285b7f9fb4bf53_1440w.jpg?source=1940ef5c',
        'https://pic4.zhimg.com/80/v2-9395459af9d0c1027981709a97a17f14_1440w.jpg?source=1940ef5c'
      ]
    },
    {
      id: '2',
      name: ' 苏国涛',
      time: '2020-01-12',
      title: '晚上开会',
      content: '晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会',
    },
    {
      id: '3',
      name: ' 苏国涛',
      time: '2020-01-12',
      title: '晚上开会',
      content: '晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会',
    },
    {
      id: '4',
      name: ' 苏国涛',
      time: '2020-01-12',
      title: '晚上开会',
      content: '晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会',
    },
    {
      id: '5',
      name: ' 苏国涛',
      time: '2020-01-12',
      title: '晚上开会',
      content: '晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会晚上开会',
    },
  ]

  return (
    <View className={s.container}>
      <SubPageTitle name='通知中心' />
      <View className={s.noticeList}>
        {
          notices.map(notice => (
            <NoticeCard
              className={s.notice}
              key={notice.id}
              notice={notice}
              clickFn={() => handleOpenModal(notice)}
            />
          )
          )
        }
      </View>

      <AtFloatLayout
        isOpened={visible}
        title='通知详情'
        onClose={handleCloseModal}
      >
        <View className={`${s.noticeDetail} at-article`}>
          <View className='at-article__h1'>{noticeOnShow?.title}</View>
          <View className='at-article__info'>{`${noticeOnShow?.name} | ${noticeOnShow?.time}`}</View>
          <View className={`at-article__content ${s.noticeContent}`}>{noticeOnShow?.content}</View>
          {
            !isEmpty(noticeOnShow?.images) && (noticeOnShow?.images || []).map(image => {
              return <Image className={`article__img ${s.noticeImage}`} mode='widthFix' src={image} key={image} />
            })
          }
        </View>
      </AtFloatLayout>
    </View>
  )
}

export default Notice