const { $,$$,tabbar } = require('../../dist/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
	img:$.data.img,
	pageIndex:0,
	tab:true,
	storeInfo:[
			{img:'address2.png',type:'门店地址：',txt:'广州市天河区天河北路高科大夏B座'},
			{img:'clock2.png',type:'营业时间：',txt:'10:00am - 10:00pm'},
	],
	busList:[
			{id:'0',name:'石牌橋',add:'廣州市天河區天河北路高科大夏B座'},
			{id:'0',name:'石牌橋',add:'廣州市天河區天河北路高科大夏B座'},
			{id:'0',name:'石牌橋',add:'廣州市天河區天河北路高科大夏B座'},
	],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  		$$.GetWaiterBusinessInfo($.store('busid')).then(res=>{
  			console.log(res,this.data.storeInfo)
  			this.setData({
  				busDetail:res,
  				'storeInfo[0].txt':res.address,
  				'storeInfo[1].txt':res.opentime,
  			})
  		})
	  // let pageindex = ''
	  // if(options.pageindex&&options.pageindex==1){
		
	  // }
	  // $.store('orderType',options.type)
	  // this.setData({
	  //     pageIndex:1,
	  //     type:options.type,
	  //   })
	
  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  this.setTabbar()
  },
  setTabbar(){
	new tabbar({
		tabs2:'home2,busDetail,game'
	})
  },
  tab(e){
	var id = e.currentTarget.dataset.id
	var tab = this.data.tab
	if(id==1){
		tab = false
	}else{
	  tab = true
	}
	this.setData({
	  tab
	})
  },
  getBusDetail(e){
	wx.navigateTo({
	  url:'/pages/busDetail/busDetail?pageindex=1'
	})
	// this.setData({
	//   pageIndex:1,
	// })
  },

 
})