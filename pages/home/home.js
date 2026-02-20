// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [], // 轮播图数据
    gridList: []    // 九宫格数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList()
    this.getGridList()
  },

  // 获取轮播图数据
  getSwiperList() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/slides',
      method: 'GET',
      success: (res) => {
        console.log('轮播图数据：', res)
        this.setData({
          swiperList: res.data
        })
      }
    })
  },

  // 获取九宫格数据
  getGridList() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      method: 'GET',
      success: (res) => {
        console.log('九宫格数据：', res)
        this.setData({
          gridList: res.data
        })
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})