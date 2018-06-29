const { $,$$,tabbar } = require('../../dist/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
        img:$.data.img,
        order_info:[
                    { type:'用餐人數',text:'2人' },
                    { type:'用餐時間',text:'2018-03-31 A.M 11:30' },
                    { type:'聯繫姓名',text:'劉女士' },
                    { type:'聯繫電話',text:'130 7307 7169' },
        ],
        orderList:[
                    {},
                    {},
                    {},
        ],
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

  onShow: function () {
    this.setTabbar()
  },
  setTabbar(){
    new tabbar({
        tabs5:'ranks,order'
    })
  },

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