import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showMessage } from 'react-native-flash-message';

import { API_URL } from '@/config/services';
import { useUserStore } from '@/store/useUserStore';

const axios = Axios.create({
  baseURL: API_URL,
});

const authRequestInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = useUserStore.getState().token;
  config.headers = config.headers || {};
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
};

const requestErrorHandler = (error: AxiosError): Promise<AxiosError> => {
  console.log('🚀 ~ req.interceptor ~', error);
  showMessage({
    message: 'No Internet Connection!',
    type: 'danger',
    icon: 'warning',
  });
  return Promise.reject(error);
};

const responseSuccessHandler = <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
  return response;
};

const responseErrorHandler = <T>(error: AxiosError<T>): Promise<AxiosError<T>> => {
  if (error.isAxiosError && !error.response) {
    showMessage({
      message: 'Something went wrong!',
      type: 'danger',
      icon: 'warning',
    });
  }
  console.log('🚀 ~ res.interceptor ~', error.response?.data);
  return Promise.reject(error);
};

// @ts-ignore
axios.interceptors.request.use(authRequestInterceptor, requestErrorHandler);
axios.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

export default axios;
