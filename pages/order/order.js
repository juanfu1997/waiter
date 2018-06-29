const { $,$$,tabbar } = require('../../dist/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      img:$.data.img,
      order_type:'appointment',
      // ranksCrowd:'',
      remind:{
            type:'',
            tips:'',
      },
      
  },
  onLoad: function (options) {
    console.log(options)
    let order_type = this.data.order_type;
    const remind = this.data.remind;
    let orderType = $.store('orderType')
    order_type = orderType==1?'ranks':'appointment'
    $.store('busid',options.id)
    /* 队伍类型 */
    if(order_type=="ranks"){
        remind.type = '排隊狀態提醒'
        remind.tips = '開啟微信后，微信可收到提醒通知。'
    }else{
        remind.type = '預定用餐提醒'
        remind.tips = '開啟微信后，微信可收到用餐提醒等通知。'
    }
    /* 获取店铺信息 */


    this.setData({ 
        remind,
        order_type,
        busId:options.id
       })

  },
  onShow: function () {
    this.setTabbar()
  },
  setTabbar(){
    new tabbar({
        tabs2:'home,busDetail,game'
    })
  },
  ranksCrowdInput(e){
    console.log(e)
    if(e.detail.value.trim()){
        this.ranksCrowd = e.detail.value
    }else{
        this.ranksCrowd = ''
    }
    this.setData({
        ranksCrowd:this.ranksCrowd,
    })
  },

  /* 选择用餐人数 */
  appCrowdInput(e){
    if(e.detail.value.trim()){
        this.appCrowd = e.detail.value
    }else{
        this.appCrowd = ''
    }
    this.setData({
        appCrowd:this.appCrowd,
    })
  },

  /* 选择用餐时间 */
  appTimeInput(e){
    if(e.detail.value.trim()){
        this.appTime = e.detail.value
    }else{
        this.appTime = ''
    }
    this.setData({
        appTime:this.appTime,
    })
  },
  /* 联系姓名appSex */
  appNameInput(e){
    if(e.detail.value.trim()){
        this.appName = e.detail.value
    }else{
        this.appName = ''
    }
    this.setData({
        appName:this.appName,
    })
  },
  /* 选择性别 */
  appSex(e){
    let appSex = this.data.appSex
    if(e.currentTarget.dataset.id==0){
        appSex = '先生'
    }else{
        appSex = '女士'
    }
    this.setData({
        appSex:appSex,
    })
  },
  /* 输入联系电话 */
  appPhoneInput(e){
    let phone = e.detail.value.trim()
    if (phone.length < 11 || phone[0] != 1) {
            $.alert('请输入正确的手机号码')
            return
        }
    if(phone){
        this.appPhone = e.detail.value
    }else{
        this.appPhone = ''
    }
    this.setData({
        appPhone:this.appPhone,
    })
  },


  /* 排队 */
  getRanksNum(e){
    console.log(e)
    $.goPage(e)
  },

  /* 预约 */
  getappointment(e){
    $.goPage(e)
  },

})