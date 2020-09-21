// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: []
  },
  chooseImg() {
    let that = this;
    let len = this.data.imgs;
    if (len >= 9) {
      this.setData({
        lenMore: 1
      })


      return;
    }
    wx.chooseImage({
      success: (res) => {
        let tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        let imgs = that.data.imgs;
        for (let i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length < 9) {
            imgs.push(tempFilePaths[i])
          } else {
            that.setData({
              imgs
            })
            wx.showModal({
              title: '提示',
              content: '最多只能有九张图片'
            })
            return;
          }
        }
        that.setData({
          imgs
        })
      }
    })
  },
  previewImg(e) {
    let index = e.currentTarget.dataset.index;
    let imgs = this.data.imgs;
    wx.previewImage({
      current: imgs[index],
      urls: imgs,
    })
  },
  deleteImg(e) {
    let _index = e.currentTarget.dataset.index;
    let imgs = this.data.imgs;
    imgs.splice(_index, 1);
    this.setData({
      imgs
    })
  },
  sendComment:function(){
    wx.showToast({
      title: '发布成功',
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