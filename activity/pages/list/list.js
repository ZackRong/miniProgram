import { callApi } from '../../utils/index';
import { API } from '../../api';

Page({
  data: {
    activities: []
  },
  /**
   * sceneToken: eyJjb21tdW5pdHlJZCI6IjI0MDExMTA0NDMzMjA2MTQ1NyJ9,
   * categoryId: 1002858
   * beta，左邻演示
   */

  onLoad: function (options) {
    const { categoryId, sceneToken } = options || {};
    this.listNearbyActivitiesByScene(categoryId, sceneToken);
  },

  listNearbyActivitiesByScene: function (categoryId, sceneToken) {
    wx.showLoading({
      title: '加载中',
      duration: 5000
    });
    callApi({
      api: API.listNearbyActivitiesByScene,
      data: {
        categoryId,
        sceneToken,
        scope: 3,
        contentCategoryId: 1010
      },
      success: ({ activities = [] }) => {
        this.setData({ activities });
        wx.hideLoading();
      },
      error: ({ errorDescription = '' }) => {
        wx.showToast({
          title: errorDescription,
          icon: 'fail'
        });
      }
    });
  }
})