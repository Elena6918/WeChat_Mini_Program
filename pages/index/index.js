var app = getApp()
Page({
  data: {
    systemInfo: {},
    _api: {},
    swipers: [
      '/images/sendoff.png',
      '/images/Ebook.png',
    ],
    intro: [
      [
        '/images/trade.png',
        '/images/play.png'
      ],
    ],
    cardTeams: [{
      "viewid": "1",
      "imgsrc": "/images/logo.png",
      "count": "副标题一",
      "name": "标题一",

    }, {
      "viewid": "2",
      "imgsrc": "/images/logo.png",
      "count": "副标题二",
      "name": "标题二",

    }, {
      "viewid": "3",
      "imgsrc": "/images/logo.png",
      "count": "副标题三",
      "name": "标题三",
    }
    ]
  },

  onLoad() {
    var that = this
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res
      })
    })

    that.setData({
      _api: api
    })

    this.getSwipers()
    this.pullUpLoad()
  },

  getSwipers() {
    api.get(api.SWIPERS)
      .then(res => {
        this.setData({
          swipers: res.data.ads
        })
      })
  },

  /**
   * 点击跳转详情页
   */
  tradeView: function () {
    wx.navigateTo({
      url: '../trade/trade'
    })
  },
  playView: function () {
    wx.navigateTo({
      url: '../play/play'
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../weixinlink/weixinlink'

    })
  },

  onLoad: function () {
    console.log('onLoad:' + app.globalData.domain)

  }
})

