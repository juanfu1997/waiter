module.exports = { tabbar }

const $ = require('../../utils/util')
const $$ = require('../request/index')

const _tabbar_ = {
	home: {
		icon: 'i-home',
		text: '',
		page: 'index',
	},
	home2: {
		icon: 'i-home',
		text: '',
		page: 'index',
	},
	busDetail: {
		icon: 'i-busDetail',
		text: '餐廳特色',
		page: 'busDetail',
	},
	cancelReserve: {
		icon: '',//i-cancel
		text: '取消预订',
		page: 'index',
	},
	reserveAgain: {
		icon: '',//i-reserveAgain
		text: '重新预订',
		page: 'index',
	},
	game: {
		icon: 'i-game',
		text: '等待小遊戲',
		page: 'waitGame',
	},
	myIkebanaOrder: {
		icon: 'i-card1',
		text: '我的课程',
		page: 'myIkebanaOrder',
	},
	ranks:{
		icon: 'i-ranks',
		text: '排隊管理',
		page: 'ranks',
	},
	order: {
		icon: 'i-order',
		text: '預定管理',
		page: 'orderList',
	},
	contact: {
		icon: 'i-contact',
		text: '客服',
	},
	// 按钮
	sort: {
		text: '场景分类',
		link: [{ id: 0, scene_type: "新花到店" }],
	},
	activity: {
		text: '提醒',
		link: [
			{ scene_type: '新花到店', page: 'remind',id:'3' },
			{ scene_type: '课程提醒', page: 'remind',id:'4'  },
			{ scene_type: '最新优惠', page: 'remind',id:'5'  },
		],
	},
	vip: {
		text: '会员福利',
		link: [
			{ scene_type: '积分查询', page: 'vip' },
			{ scene_type: '积分兑换', page: 'exchange' },
			{ scene_type: '余额充值', page: 'topup' },
			{ scene_type: '个人中心', page: 'personal' },
			{ scene_type: '鲜花日历', page: 'calender' }
		],
	},
}

const fns = {
	goPage(e) {
		const { page, openType } = $.dataset(e)
		const tabs3 = _tabbar_.tabs3
		const tabs4 = _tabbar_.tabs4
		if(tabs4.length && page == tabs4[1].page){
			console.log('sucss',e)
			//取消預訂函數
			// $$.cancel
			return
		}
		if (this.data._tabbar_.current == page && openType == 'reLaunch') return
		$.goPage(e)
	},

	noop() {
		return
	},
	tapButton(e) {
		const { idx } = $.dataset(e)
		const btn = _tabbar_.btns[idx]
		btn.callback && btn.callback(e)
	},
	tapTab(e) {
		const { idx } = $.dataset(e)
		const tabs3 = _tabbar_.tabs3
		$.each(tabs3, (i, v) => {
			if (i == idx) {
				v.show = !v.show
			} else {
				v.show = false
			}
		})
		this.setData({ '_tabbar_.tabs3': tabs3 })
	},
	//获取分类产品列表
	setProductTypeList() {
		if ($.store('sort') && _tabbar_.current != 'index') {
			_tabbar_.sort = $.store('sort')
			return
		}
		$$.GetSceneTypeList(1).then(res => {
			// res.push({"scene_type":"新花到店","parentid":0,"parentname":null,"id":3,"sort":0,"status":0,"addtime":"2018-03-20T15:43:37","page":"sort","openType":"redirect"})
			console.log('tabs3',typeof res)
			$.each(res,(i,v)=>{
				if(v.holiday_time&&v.holiday_time != '0001-01-01T00:00:00'){
					console.log('holiday_time',v.holiday_time)
					res.splice(i,1)

				}
			})
			const link = res.concat(_tabbar_.sort.link.slice(-1))
			link.map(v => {
				v.page = 'sort' 
				v.openType = 'redirect'
			})
			_tabbar_.sort.link = link
			$.store('sort', _tabbar_.sort)
		})
	},
	setRemindTypeList(){
		console.log('activity')
		if ($.store('activity') && _tabbar_.current != 'index') {
			_tabbar_.activity = $.store('activity')
			return
		}
		const link = _tabbar_.activity
		link.map(v =>{
			v.page = 'activity'
			v,openType = 'redirect'
		})
		_tabbar_.activity.link = link
		$.store('activity',_tabbar_.activity)
	},

}


function addPrefix(name) {
	return name && $.data.img + name + '.png'
}

function setTabs1() {
	const tabs1 = _tabbar_.options.tabs1
	if (!tabs1) return
	const arr = []
	$.each(tabs1.split(','), (i, v) => {
		const tab = _tabbar_[v]
		const isCurPage = _tabbar_.current == tab.page
		tab.active = isCurPage
		tab.active = tab.page == 'cart' && $.store('cart').length > 0
		tab.img = `${$.data.img}${tab.icon}.png`
		arr.push(tab)
	})
	_tabbar_.tabs1 = arr
}

function setTabs2() {
	const tabs2 = _tabbar_.options.tabs2
	if (!tabs2) return
	const arr = []
	$.each(tabs2.split(','), (i, v) => {
		const tab = _tabbar_[v]
		const isCurPage = _tabbar_.current == tab.page
		tab.active = isCurPage
		tab.img = `${$.data.img}${tab.icon}${isCurPage ? '-active.png' : '.png'}`
		arr.push(tab)
	})
	_tabbar_.tabs2 = arr
}

function setTabs4() {
	const tabs4 = _tabbar_.options.tabs4
	if (!tabs4) return
	const arr = []
	$.each(tabs4.split(','), (i, v) => {
		const tab = _tabbar_[v]
		const isCurPage = _tabbar_.current == tab.page
		tab.active = isCurPage
		tab.img = `${$.data.img}${tab.icon}${isCurPage ? '-active.png' : '.png'}`
		arr.push(tab)
	})
	_tabbar_.tabs4 = arr
}

function setTabs5() {
	const tabs5 = _tabbar_.options.tabs5
	if (!tabs5) return
	const arr = []
	$.each(tabs5.split(','), (i, v) => {
		const tab = _tabbar_[v]
		const isCurPage = _tabbar_.current == tab.page
		tab.active = isCurPage
		tab.img = `${$.data.img}${tab.icon}${isCurPage ? '-active.png' : '.png'}`
		arr.push(tab)
	})
	_tabbar_.tabs5 = arr
}

function setTabs3() {
	const tabs3 = _tabbar_.options.tabs3
	if (!tabs3) return
	const arr = []
	$.each(tabs3.split(','), (i, v) => {
		const tab = _tabbar_[v]
		console.log('tabs3',tab,_tabbar_,_tabbar_[v])
		tab && arr.push(tab)
	})
	_tabbar_.tabs3 = arr
}

function setBtns() {
	const btns = _tabbar_.options.btns || []
	$.each(btns, (i, v) => {
		v.img = addPrefix(v.icon)
	})
	_tabbar_.btns = btns
}

function tabbar(options = {}) {
	const pages = getCurrentPages()
	const _this = pages[pages.length - 1]
	Object.assign(_tabbar_, {
		current: _this.route.split('/')[2],
		options,
		tabs1: [],
		tabs2: [],
		tabs3: [],
		tabs4: [],
		tabs5: [],
		btns: [],
	})
	setTabs1()
	setTabs2()
	setTabs3()
	setTabs4()
	setTabs5()
	setBtns()
	// 宝贝分类列表
	options.tabs3 && fns.setProductTypeList()

	// 绑定数据和方法到页面
	_this.setData({ _tabbar_ })
	Object.assign(_this, fns)
}