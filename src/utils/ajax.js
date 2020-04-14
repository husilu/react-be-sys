import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';
import { message } from 'antd';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

instance.interceptors.request.use((config) => {
  return config;
}, err => {
});

// 处理返回结果
instance.interceptors.response.use((res) => {
  return res.data
}, err => {
  message.destroy();
  message.error({
    content: '出错了！',
    duration: 1
  });
});

export default instance;