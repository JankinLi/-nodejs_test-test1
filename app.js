// app.js
App({
  onLaunch() {
    
    console.log('onLoad of app.js')

    // 展示本地存储能力
    wx.setStorageSync('logs', [])
    
    const logs = wx.getStorageSync('logs') || []
    logs.push([Date.now(),'app onLaunch'])
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
        this.userInfo = res.code
      }
    })
  },
  onShow(){    
    console.log('onShow of app.js')
    const logs = wx.getStorageSync('logs') || []
    logs.push([Date.now(),'app onShow'])
    wx.setStorageSync('logs', logs)
  },
  onHide(){
    console.log('onHide of app.js')
    const logs = wx.getStorageSync('logs') || []
    logs.push([Date.now(),'app onHide'])
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  }
})
