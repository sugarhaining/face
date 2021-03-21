import React, { FC, useCallback, useState, useEffect } from 'react';
import { showLoading, hideLoading, showToast } from '@tarojs/taro';
import isEmpty from 'lodash/isEmpty';
import { View, Image } from '@tarojs/components';
import { AtFloatLayout } from 'taro-ui';

import { SubPageTitle, Card, Empty } from '@/components';
import { Notice as INotice } from '@/types';
import { timeStamp2FormatTime } from '@/utils';
import { fetchNotice } from './service';
import s from './index.scss';

interface IProps {}

const { NoticeCard } = Card;

const Notice: FC<IProps> = () => {
  const [noticeOnShow, setNoticeOnshow] = useState<INotice>();
  const [visible, setVisible] = useState<boolean>(false);
  const [noticeSet, setNoticeSet] = useState<INotice[]>();

  const handleOpenModal = useCallback((notice: INotice) => {
    setNoticeOnshow(notice);
    setVisible(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  const fetchNoticeLocal = useCallback(async () => {
    showLoading({
      title: '数据加载中',
    });

    const [err, res] = await fetchNotice();

    hideLoading();

    if (err) {
      showToast({
        title: '数据请求失败',
        icon: 'none',
      });
      setNoticeSet([]);
    } else {
      setNoticeSet(
        isEmpty(res?.data?.notice_list) ? [] : res?.data?.notice_list,
      );
    }
  }, []);

  useEffect(() => {
    fetchNoticeLocal();
  }, [fetchNoticeLocal]);

  return (
    <View className={s.container}>
      <SubPageTitle name="通知中心" />
      {isEmpty(noticeSet) ? (
        <Empty />
      ) : (
        <View className={s.noticeList}>
          {(noticeSet || []).map(notice => (
            <NoticeCard
              className={s.notice}
              key={notice.id}
              notice={notice}
              clickFn={() => handleOpenModal(notice)}
            />
          ))}
        </View>
      )}

      <AtFloatLayout
        isOpened={visible}
        title="通知详情"
        onClose={handleCloseModal}
      >
        <View className={`${s.noticeDetail} at-article`}>
          <View className="at-article__h1">{noticeOnShow?.title}</View>
          <View className="at-article__info">{`${
            noticeOnShow?.name
          } | ${timeStamp2FormatTime(noticeOnShow?.time)}`}</View>
          <View className={`at-article__content ${s.noticeContent}`}>
            {noticeOnShow?.content}
          </View>
          {(noticeOnShow?.images || []).map(image => (
            <Image
              className={`article__img ${s.noticeImage}`}
              mode="widthFix"
              src={image}
              key={image}
            />
          ))}
        </View>
      </AtFloatLayout>
    </View>
  );
};

export default Notice;
