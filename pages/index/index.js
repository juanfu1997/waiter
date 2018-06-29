const app = getApp()
const { $,$$,tabbar } = require('../../dist/index');

Page({
  data: {
    img:$.data.img,
    classify:[
              {id:0,src:'lineUp.png', name:'排队取号',page:'businessList',param:'type=1'},
              {id:1,src:'booking.png',name:'用餐预定',page:'businessList',param:'type=2'},
              {id:2,src:'record.png',name:'我的订单',page:'',param:''},
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    showlogin:true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  goPage(e){
    $.goPage(e)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /* 驗證賬號 */
  send(e){
    console.log(e)
      /* 驗證接口 */
      if(0){}else{
        $.alert('賬號或密碼不正確，請重新輸入。')
      }
      this.setData({
        showlogin:true,
      })
  },
  saveUserName(e){
    this.setData({
      username:e.value
    })
  },
  savePassword(e){
    this.setData({
      password:e.value
    })
  },
  showlogin(){
    this.setData({
      showlogin:false,
    })
  },
})
