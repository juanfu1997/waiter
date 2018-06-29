const showapi_appid = '45986'
const secret = '0e2fd7cf88b6440ebce838d784d43245'
const { $,$$,tabbar } = require('../../dist/index')

Page({

  /**
   * 页面的初始数据
   */
  data: {
      tabList:[
          {  value:'恐怖漫画' },
          {  value:'故事漫画' },
      ],
      cartoon:[
          {name:'聊斋'},
          {name:'聊斋'},
          {name:'聊斋'},
      ],
      active:'tap_li',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.dealWithCartoon()
  },
  showType(){
    console.log('1')
      let  active = this.data.active
      if (active=='tap_li') {
        active = 'active'
      }else{
        active = 'tap_li'
      }
      this.setData({
        active,
      })
  },
  //获取漫画分类，漫画详情第一张图片作为封面
  dealWithCartoon(){
    // console.log(showapi_appid)
    // let page = 1
    // let type = 'kbmh'
    // let contentlist = []
    // $$.GetCartList(page,showapi_appid,type,secret).then(res=>{
    //   contentlist = res.showapi_res_body.pagebean.contentlist
    //   $.each(contentlist,(i,v)=>{
    //     $$.GetCartDetails(v.id,showapi_appid,secret).then(obj=>{
    //     console.log('obj1',obj)
    //         v.coverImg = res.showapi_res_body.imgList[0]
    //     })
    //   })
    //   console.log('obj',contentlist)
    //   this.setData({
    //     contentlist,
    //   })
    // })
    
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