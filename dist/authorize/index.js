const $ = require('../../utils/util')
const $$ = require('../request/index')
let success, fail

module.exports = {
	getUser,
	getOpenID,
	getOpenID2,
	useUserInfo,
	// login,
	// getOpenId,
}

// function login() {
//   return  new Promise((resolve, reject) => {
//       wx.login({
//         success: (res) => {
//           resolve(res)
//         },
//         fail: (res) => {
//           reject(res)
//         }
//       })
//   })
// }

// function getOpenId(obj) {
//    // 获取code
//    login().then((res) => {
//       // 获取openid
//       const data = {
//         id: util.data.appid,
//         js_code: res.code
//       }
//       return request.GetSessionKey(data);
//    }).then(res => {
//       const openid = JSON.parse(res).openid;
//       // 获取用户信息
//       obj.success(openid)
//    })
// }



function getUser(data) {
	success = data.success
	fail = data.fail
	// 是否获取到userid
	if ($.store('userid')) {
		success()
	} else if ($.store('openid')) {
		// getUserInfo()
	} else {
		getOpenID()
	}
}

function getOpenID() {

	// 获取code
	$.login().then(res => {
		// 获取openid
		const data = {
			id: $.data.appid,
			js_code: res.code,
		}
		return $.GetSessionKey(data)
	}).then(res => {
		const { openid, unionid } = JSON.parse(res)
		console.log('data21',res)
		$.store({ openid })
		unionid && $.store({ unionid })
		// 获取用户信息
		getUserInfo()
	})
}


	function getOpenID2(data) {
		success = data.success
		fail = data.fail
		// 获取code
		$.login().then(res => {
			// 获取openid
			const data = {
				id: $.data.appid,
				js_code: res.code,
			}
			return $.GetSessionKey(data)
		}).then(res => {
			const { openid, unionid } = JSON.parse(res)
			$.store({ openid })
			unionid && $.store({ unionid })
			console.log('userInfo',res)
			// 获取用户信息
			// getUserInfo()
			success()
		})
	}
function getUserInfo() {
	// if ($.store('userInfoRefuse')) {
	// 	// 打开授权设置
	// 	console.log('授权')
	// 	$.openSetting().then(res => {
	// 		if (res.authSetting["scope.userInfo"]) {
	// 			return $.getUserInfo()
	// 		} else {
	// 			fail()
	// 		}
	// 	}).then(res => {
	// 		getUserInfoSuccess(res.userInfo)
	// 	})
	// } else {
		// 获取用户信息
		console.log('ok')
		$.getUserInfo().then(res => {
			getUserInfoSuccess(res.userInfo)
		}, res => {
			fail()
			$.store('userInfoRefuse', true)
		})
	// }
}

function getUserInfoSuccess(userInfo) {
	// 保存用户信息
	const data = {
		wxpublic_id: $.data.appid,
		openid: $.store('openid'),
		photo: userInfo.avatarUrl,
	}
	$.store('userInfo', data)
	// $.remove('openid', 'userInfoRefuse')
	console.log('data',data)
	success()
}

function useUserInfo(obj) {
  if (wx.getStorageSync('userid') && wx.getStorageSync('unionid')) {
    obj.success();
} else if (wx.getStorageSync('openid') && wx.getStorageSync('unionid')){
    checkUserInfo(obj);
  } else {
    getOpenID2(obj);
  }
}