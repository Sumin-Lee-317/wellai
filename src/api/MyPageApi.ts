import axios, { AxiosInstance, AxiosPromise } from 'axios';
import type * as Api from './common';

interface requestApiOptions {
  readonly mypage: AxiosInstance;
  readonly getRecordsYear: () => AxiosPromise<Api.reportYear[]>;
  readonly getRecordsMonth: (month: number) => AxiosPromise<Api.reportMonth[]>;
}

export const MyPageApi = (): requestApiOptions => {
  const mypage = axios.create({
    baseURL: '/api/users',
  });
  return {
    mypage,
    getRecordsYear: () => mypage.get(`/records/year`),
    getRecordsMonth: (month) =>
      mypage.get(`/records/`, {
        params: {
          month: month,
        },
      }),
  };
};
