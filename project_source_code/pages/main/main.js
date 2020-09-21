// pages/main/main.js
import Dialog from '../../dist/dialog/dialog';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: 'image/location.png',
      id: 0,
      latitude: 30.753085,
      longitude: 103.935213,
      width: 30,
      height: 30
    }],
    polygons:[{
      points:[
      {
        latitude: 30.747663,
        longitude: 103.919678,
      },
      {
        latitude: 30.760203,
        longitude: 103.930664,
      },
      {
        latitude: 30.753048 ,
        longitude: 103.940363,
      },
      {
        latitude: 30.751315 ,
        longitude: 103.941135 ,
      },
      {
        latitude: 30.748143 ,
        longitude: 103.940921 ,
      },
      {
        latitude: 30.743975,
        longitude: 103.939075,
      },
      {
        latitude: 30.739180 ,
        longitude: 103.937531,
      },
      {
        latitude: 30.742942 ,
        longitude: 103.925428,
      },
      {
        latitude: 30.747295,
        longitude: 103.919849,
      },
    ],
    strokeWidth:2,
    strokeColor:"#hefeff",
  }],
    // 弹窗
    show: false,
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  controltap(e) {
    console.log(e.controlId)
  },

  maptap(){
    this.mapContext.getCenterLocation({
      success: function (res) {
        wx.showModal({
          title: '位置',
          content: "经度:" + res.longitude + ",纬度:" + res.latitude,

        })
        console.log(res.latitude + "," + res.longitude)
      }
    })
  
  },

  poitap(){
    this.mapContext.getCenterLocation({
      success:function(res){
        wx.showModal({
          title: '提示',
          content: "经度:" + res.longitude + ",纬度:" + res.latitude ,
        })
      }
    })
  },

  /**
   * 关闭弹窗
   */
  onClose:function(event){
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
getUserInfo:function(e){
  console.log(e.detail.errMsg)
  console.log(e.detail.userInfo)
  console.log(e.detail.rawData)
  console.log(e.detail)
},
login:function(){
  var that = this
  console.log("show:"+that.data.show)
  that.setData({
    show:true
  })
  console.log("show:" + that.data.show)
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
    this.mapContext = wx.createMapContext("map")
  },





  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    that.login()
    // Dialog.alert({
    //   title: '提示',
    //   message: '某些功能需要登陆才能使用，是否登陆？',
    //   confirmButtonOpenType: "getUserInfo",
    //   showCancelButton:true,
    // }).then(() => {
    //   // on close
    // });
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