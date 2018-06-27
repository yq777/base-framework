import axios from "axios";
import {Message} from "element-ui";

const instance = axios.create();

instance.defaults.timeout = 10 * 1000;

instance.defaults.baseURL = 'backend';

instance.interceptors.request.use(
  request => {
    request.headers = {
      'Content-Type': 'application/json'
    };
    return request;
  }
);

instance.interceptors.response.use(
  response => {
    let res = response.data;
    return new Promise((resolve, reject) => {
      if (res.result) {
        resolve(res.data);
      } else {
        Message.error(res.msg);
        reject(res);
      }
    })
  },
  errors => {
    return Promise.reject(errors);
  }
);

export function ajaxPost(url, params) {
  return instance.request({
    method: 'POST',
    url: url,
    data: params
  })
}

export function ajaxGet(url, params) {
  return instance.request({
    method: 'GET',
    url: url,
    params: params
  })
}

export default instance;
