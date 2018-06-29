const { $,$$,tabbar } = require('../../dist/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      img:$.data.img,
      order_type:'ranks',
      bill_numberState:'fontSize1',
      billStatePage:'',
      stateJson:[
                { state1:'等待叫號，前方有',state2:'3人',state3:'排隊',page:''  },
                { state1:'已接待，排隊結束',state2:'',state3:'',page:''  },
                { state1:'距離用餐時間還有 ',state2:'31:59:10',state3:'',page:''  },
                { state1:'您未按時到達，請',state2:'重新預定',state3:'',page:''  },
      ],
      remarks:{
              ranks:'*若已過號，請返回首頁重新取號，謝謝您的配合！',
              appointment:'*請您按照預定時間到達餐廳，餐廳將會為您保留半小時，\n如半小時後未到達餐廳將自動取消預訂，謝謝合作！',
      },
      bill_state:{ state1:'等待叫號，前方有',state2:'3人',state3:'排隊',page:''  },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const orderType = $.store('orderType')
    let billTitle = orderType==1?'你已成功取號':'你已成功預定'
    this.setData({
      billTitle,
      bill_numberState:orderType==1?'fontSize2':'fontSize1'
    })
  
  },
  goPage(e){
    $.goPage(e)
  },

  onShow: function (options) {
    this.setTabbar()
  },
  setTabbar(){
    const orderType = $.store('orderType')
    if(orderType==1){
      new tabbar({
          tabs2:'home2,busDetail,game'
      })
    }else{
      new tabbar({
          tabs4:'home,cancelReserve,reserveAgain'
      })
    }
    
    
  },
    // console(){
    //   console.log('okok')
    // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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