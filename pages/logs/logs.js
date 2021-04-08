// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    my_logs: []
  },
  onLoad() {
    console.log('onLoad of logs.js')
    this.setData({
      my_logs: (wx.getStorageSync('logs') || []).map(ab => {
        return util.formatTime(new Date(ab[0])) + ' : ' + String(ab[1])
      })
    })
  },
  onShow(){
    console.log('onShow of logs.js')
  },
  onHide(){
    console.log('onHide of logs.js')
  }
})
