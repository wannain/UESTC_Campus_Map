// pages/auth/auth.js
const urls = require('../../urls/urls.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:"",
    studentId:"",
    uid:"",
    disabled:true,
  },

onPasswordChange:function(e){
  var that = this
  if (e.detail != "" && that.data.studentId != "") {
      that.setData({
        disabled: false
      })
  }else{
    that.setData({
      disabled:true
    })
  }
  that.setData({
    password:e.detail
  })
  
},
onIdChange:function(e){
  var that = this
  if (e.detail != "" && that.data.password != ""){
      that.setData({
        disabled:false
      })
  } else {
    that.setData({
      disabled: true
    })
  }
  that.setData({
    studentId: e.detail
  })
},

login:function(){
var that = this
var sid = that.data.studentId
var pwd = that.data.password
var uid = that.data.uid
wx.showToast({
  title: '认证成功',
})
// wx.request({
//   url: urls.AUTH_URL,
//   data: {
//     'sid': sid,
//     'pwd': pwd,
//     'uid':uid,
//   },
//   header: {
//     "Content-Type": 'application/json'
//   },
//   method: "POST",
//   success: function (res){

//   },
//   fail:function(res){

//   },
//   complete:function(){

//   }
// })
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