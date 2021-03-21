import { uploadFile, showLoading, hideLoading } from '@tarojs/taro';
import { BaseResult, Notice } from '@/types';
import { wrapFetch, geneTimeStamp } from '@/utils';
import { UrlPrefix } from '@/apis/common';

type fetchNoticeData = Omit<Notice, 'id'>;

interface fetchNoticeRes {
  notice_info: Notice;
}

export const fetchNotice = async (data: fetchNoticeData) => {
  const { name, title, content, images, summary } = data;
  const imageList: string[] = [];
  const time = geneTimeStamp();

  // 上传图片
  if (images?.length) {
    const taskQueue: any = [];

    showLoading({
      title: '图片上传中',
    });

    images.forEach(image => {
      taskQueue.push(
        uploadFile({
          url: `${UrlPrefix}/image`,
          name: 'file',
          filePath: image,
        }),
      );
    });
    const imageUploadRes = await Promise.all(taskQueue);
    hideLoading();

    imageUploadRes.forEach(res => {
      const imageUrl = JSON.parse(res?.data).data.image_url;
      imageList.push(imageUrl || '');
    });
  }

  showLoading({
    title: '通知发放中',
  });
  const res = await wrapFetch<BaseResult<fetchNoticeRes>, fetchNoticeData>(
    '/notice',
    {
      name,
      time,
      title,
      content,
      summary,
      images: imageList,
    },
    'POST',
  );

  hideLoading();
  return res;
};
