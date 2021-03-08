import { uploadFile } from '@tarojs/taro';
import { BaseResult, Notice } from '@/types';
import { wrapFetch } from '@/utils';
import { UrlPrefix } from '@/apis/common';

type fetchNoticeData = Omit<Notice, 'id' | 'time'>;

interface fetchNoticeRes {
  notice_info: Notice;
}

export const fetchNotice = async (data: fetchNoticeData) => {
  const { name, title, content, images, summary } = data;
  const imageList: string[] = [];

  // 上传图片
  if (images?.length) {
    const taskQueue: any = [];
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
    imageUploadRes.forEach(res => {
      const imageUrl = JSON.parse(res?.data).data.image_url;
      imageList.push(imageUrl || '');
    });
  }

  const res = await wrapFetch<BaseResult<fetchNoticeRes>, fetchNoticeData>(
    '/notice',
    {
      name,
      title,
      content,
      summary,
      images: imageList,
    },
    'POST',
  );

  return res;
};
