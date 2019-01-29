// const callApi = require('../../utils/callApi.js');
import { callApi } from '../../utils/index';
import { API } from '../../api';

Page({
  onLoad: () => {
    callApi({
      api: API.logon,
      data: {
        namespaceId: 0,
        userIdentifier: 'root',
        password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
      },
      success: (response) => {
        console.log(response)
      }
    });
  }
})
