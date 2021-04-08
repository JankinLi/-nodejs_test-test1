// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(ab => {
        return util.formatTime(new Date(ab[0])) + '   :   ' + String(ab[1])
      })
    })
  }
})
