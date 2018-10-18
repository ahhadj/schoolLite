var base64 = require("../../image/base64");
var sliderWidth = 96;
// page/school/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    tabs: ["搜小学", "搜初中"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    distribution: [{
        id: "001",
        name: "西湖区",
        rank: 1,
        primarySchools: [{
            id: "001",
            dRank: 1,
            cRank: 1,
            name: "学军小学",
            description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
          },
          {
            id: "002",
            dRank: 2,
            cRank: 2,
            name: "文三街小学",
            description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
          }
        ],
        middleSchools: [{
            id: "001",
            dRank: 1,
            cRank: 1,
            name: "学军中学",
            description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
          },
          {
            id: "002",
            dRank: 2,
            cRank: 2,
            name: "公益中学",
            description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
          }
        ]
      },
      {
        name: "上城区",
        primarySchools: [{
          id: "001",
          dRank: 1,
          cRank: 3,
          name: "胜利小学",
          description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
        }],
        middleSchools: [{
          id: "001",
          dRank: 1,
          cRank: 2,
          name: "建兰中学",
          description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
        }]
      },
      {
        name: "拱墅区",
        primarySchools: [{
          id: "001",
          dRank: 1,
          cRank: 3,
          name: "卖鱼桥小学",
          description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
        }],
        middleSchools: [{
          id: "001",
          dRank: 1,
          cRank: 2,
          name: "启正中学",
          description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
        }]
      },
      {
        name: "下城区",
        primarySchools: [{
          id: "001",
          dRank: 1,
          cRank: 3,
          name: "青蓝小学",
          description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
        }],
        middleSchools: [{
          id: "001",
          dRank: 1,
          cRank: 2,
          name: "朝晖中学",
          description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
        }]
      },
      {
        name: "江干区",
        primarySchools: [{
          id: "001",
          dRank: 1,
          cRank: 3,
          name: "采荷小学",
          description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
        }],
        middleSchools: [{
          id: "001",
          dRank: 1,
          cRank: 2,
          name: "采荷中学",
          description: "是有百年历史又具现代气息的浙江省示范性实验小学，建校于1908年，始名杭州府官立初等小学堂。"
        }]
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      currentCity: "杭州",
      slogen: "百年大计，教育为本",
      icon60: base64.icon60,
    });
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})