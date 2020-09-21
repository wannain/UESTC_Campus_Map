// pages/detail/detail.js
const commentButtons = [{
  label: '发表讨论',
  icon: "../../images/comment.png",
}
]
const funButtons=[{
  label:"发布介绍",
  icon: "../../images/fun.png",
}]


Page({

  /**
   * 页面的初始数据
   */
  data: {
    funcs: [
      {"loc":"银桦餐厅",
      "func":"看小姐姐"},
      {
        "loc":"学子餐厅",
        "func":"吃饭"
      },
      {
        "loc": "学子餐厅",
        "func": "吃饭"
      },
      {
        "loc": "银桦餐厅",
        "func": "看小姐姐"
      },
      {
        "loc": "银桦餐厅",
        "func": "看小姐姐"
      },
      {
        "loc": "学子餐厅",
        "func": "吃饭"
      },
      {
        "loc": "银桦餐厅",
        "func": "看小姐姐"
      },
      {
        "loc": "银桦餐厅",
        "func": "看小姐姐"
      },
      {
        "loc": "学子餐厅",
        "func": "吃饭"
      },
      {
        "loc": "银桦餐厅",
        "func": "看小姐姐"
      },
      {
        "loc": "学子餐厅",
        "func": "吃饭"
      },
    ],
    index:0,
    DataSource: [1, 1, 1, 1, 1],
    icon: 'http://hbimg.b0.upaiyun.com/828e72e2855b51a005732f4e007c58c92417a61e1bcb1-61VzNc_fw658',
    userContent: '小哥哥网恋吗？我萝莉音，嘤嘤嘤！！！',
    resource: [
      'http://img.qqzhi.com/uploads/2019-01-06/101253553.jpg',
      'http://img.qqzhi.com/uploads/2019-01-06/101253553.jpg',
      'http://img.qqzhi.com/uploads/2019-01-06/101253553.jpg',
      'http://img.qqzhi.com/uploads/2019-01-06/101253553.jpg',
      'http://img.qqzhi.com/uploads/2019-01-06/101253553.jpg'
    ],
    contnet: [{
      'firstname': '张三',
      'content': '你好漂亮呀！！'
    },
    {
      'firstname': '李四',
      'content': '纳尼！！这么可爱应该是个男孩子吧？'
    },
    {
      'firstname': '我',
      'content': '这么可爱的小姐姐打一拳应该会哭好久吧！'
    },
    
    ],
    photoWidth: wx.getSystemInfoSync().windowWidth / 5,

    commentButtons,
    funButtons,
    showDialog:false,//弹窗评论
    commentContent:"",//评论内容
    content:"",
    showMultilineInputbox: false,
    /**概况页面 */
    imageURLs: [
      'https://www.uestc.edu.cn/public/2019/04/001.png',
      'https://www.uestc.edu.cn/public/2019/04/002.png',
      'https://www.uestc.edu.cn/public/2019/04/004.png',
      'https://www.uestc.edu.cn/public/2019/04/006.png',
      'https://www.uestc.edu.cn/public/2019/04/005.png',
    ],
  },
/**评论页面 */
  // 点击图片进行大图查看
  LookPhoto: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.photurl,
      urls: this.data.resource,
    })
  },

  // 删除朋友圈
  delete: function () {
    wx.showToast({
      title: '删除成功',
    })
  },

  // 点击了点赞评论
  TouchDiscuss: function (e) {
    var that=this
    that.setData({
      showDialog:true,
    })
    console.log("begin:", that.data.content)
  },
onCancel:function(e){
  var that = this
  that.setData({
    content: "",
    showDialog: false,
  })
  console.log("cancel:", that.data.content)
},

/**切换页面 */
  onTabClick:function(e){
    this.setData({
      index:e.detail.index
    })
  },

onConfirm:function(e){
  var that = this
  wx.showToast({
    title: '评论成功',
  })
  // console.log("pinglun:",that.data.commentContent)
  that.setData({
    content:"",
    showDialog: false,
  })
  console.log("confirm:",that.data.content)
},

  onChange(event) {
    var that = this
    that.setData({
      commentContent:event.detail
    })
  },

  onClickComment:function(e){
    if(e.detail.index==0){
      wx.navigateTo({
        url: '../comment/comment',
      })
    }
  },

  onClickFun:function(e){
    if (e.detail.index == 0) {
      wx.navigateTo({
        url: '../func/func',
      })
    }
  },


  /**************************************概况页面*********************************************** */

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