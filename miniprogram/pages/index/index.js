// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    selectModelShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  

  onLoad: function (options) {
    this.db = wx.cloud.database();
    this._loadSwiper();
  },
  onSwiperBookBtnClick() {
    this.setData({ selectModelShow: true });
  },

  _loadSwiper() {
    this.db.collection("swiper").get().then(res => {
      res.data.forEach((item, index) => {
        item.config.forEach((item2, index2) => {
          let splitItems = item2.split("|")
          item.config[index2] = {
            title: splitItems[0],
            subtitle: splitItems[1]
          }
        })
        res.data[index] = item
      })
      
      this.setData({
        list: res.data
      })
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