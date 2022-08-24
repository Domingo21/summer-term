// pages/detail/detail.js
var common = require('../utils/common')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    var article = wx.getStorageSync(id)
    let result = common.getNewsDetail(id)
    if(article != ' '){
      this.setData({
        article:result.news,
        isAdd:true
      })
    }
    else{
      if(result.code == '200'){
        this.setData({
          article:result.news,
          isAdd:false
        })
      }
    }
  },
  //添加收藏
  addFavorites:function(options){
    let article = this.data.article;
    wx.setStorageSync(article.id, article);
    this.setData({isAdd:true});
  },
  //取消收藏
  cancelFavorites:function(options){
    let article = this.data.article;
    wx.removeStorageSync(article.id);
    this.setData({isAdd:false});
  },

  goToDetail: function(e) {
    //获取携带的data-id数据
    let id = e.currentTarget.dataset.id;
    //携带新闻id进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
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