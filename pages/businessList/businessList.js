const { $,$$,tabbar } = require('../../dist/index');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		img:$.data.img,
		pageIndex:0,
		tab:true,
		orderType: '',
		pageParam:'',
		storeInfo:[
						{img:'address2.png',type:'门店地址：',txt:'广州市天河区天河北路高科大夏B座'},
						{img:'clock2.png',type:'营业时间：',txt:'10:00am - 10:00pm'},
		],
		busList:[
						{id:'0',name:'石牌橋',add:'廣州市天河區天河北路高科大夏B座'},
						{id:'1',name:'石牌橋',add:'廣州市天河區天河北路高科大夏B座'},
						{id:'2',name:'石牌橋',add:'廣州市天河區天河北路高科大夏B座'},
		],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let pageParam = this.data.pageParam
		let orderType = this.data.orderType
		$.store('orderType',options.type)
		// console.log(this.data.busList)
		$$.GetWaiterBusinessList().then(res=>{
			// console.log('data',res)
			this.setData({
				busList:res
			})
		})
		
		
		// if(options.type){
		// 	orderType = ''
		// }else{
		// 	orderType = ''
		// }
	},


	onShow: function () {
		this.setTabbar()
	},
	setTabbar(){
		new tabbar({
				tabs2:'home2,busDetail,game'
		})
	},
	goPage(e){
		$.goPage(e)
	},
	
	getBusDetail(e){
		var id = e.currentTarget.dataset.id

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