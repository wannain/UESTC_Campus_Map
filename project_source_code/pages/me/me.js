// pages/me/me.js
import Dialog from '../../dist/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageURLs: [
      'https://www.uestc.edu.cn/public/2019/04/001.png',
      'https://www.uestc.edu.cn/public/2019/04/002.png',
      'https://www.uestc.edu.cn/public/2019/04/004.png',
      'https://www.uestc.edu.cn/public/2019/04/006.png',
      'https://www.uestc.edu.cn/public/2019/04/005.png',
    ],
   identify:"学生",
   show:false,
  },
  
  onAuth:function(res){
    this.login()
  },
  /**
    * 关闭弹窗
    */
  onClose: function (event) {
    if (event.detail === 'confirm') {
      this.setData({
        show: false
      })
    } else {
      this.setData({
        show: false
      });
    }
  },
  getUserInfo: function (e) {
    console.log(e.detail)
  },
  login: function () {
    wx.navigateTo({
      url: '../auth/auth',
    })
  },

  onAttention:function(){
    wx.navigateTo({
      url: '../history/history',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})