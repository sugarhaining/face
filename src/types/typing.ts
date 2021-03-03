export interface Notice {
  id: string;
  name: string;
  time: string;
  title: string;
  content: string;
  images?: string[];
  summary?: string;
}

export interface UserInfo {
  nickName: string;
  avatarUrl: string;
  [key: string]: any;
}

export interface LoginInfo {
  id: string;
  name: string;
  sex: '男' | '女' | '保密';
  phone: string;
  job?: string;
  sign?: string;
}

export interface BaseResult<T> {
  data: T;
}
