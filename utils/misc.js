const app = getApp()

const receive_openid = code =>{
  console.log('receive_openid code=' + code)
  wx.request({
    url:'https://api.weixin.qq.com/sns/jscode2session',
    method: "GET",
    data: {
      "code": code,
      "grant_type":"authorization_code",
      "appid":"wx6e3474f3f47ab8ed",
      "secret":"7d5eb7fb2399403d87fc00ec904c9980",
      "js_code":"JSCODE"
    },
    header: {
      'content-type': 
      'application/json' 
      // 默认值
    },
    success(res){
      if (res){
        console.log(res.data.openid)
      }
    },
    error(error){
      if (error){
        console.log(error)
      }
    },
    complete(info){
      if (info){
        console.log(info)
      }
    }
  })
}

module.exports = {
  receive_openid
}