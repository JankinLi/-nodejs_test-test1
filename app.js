// app.js
App({
  onLaunch() {
    
    // 展示本地存储能力
    wx.setStorageSync('logs', [])
    
    const logs = wx.getStorageSync('logs') || []
    logs.push([Date.now(),'app onLaunch'])
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(){    
    const logs = wx.getStorageSync('logs') || []
    logs.push([Date.now(),'app onShow'])
    wx.setStorageSync('logs', logs)
  },
  onHide(){
    const logs = wx.getStorageSync('logs') || []
    logs.push([Date.now(),'app onHide'])
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  }
})
