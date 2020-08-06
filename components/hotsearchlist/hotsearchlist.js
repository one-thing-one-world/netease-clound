const {
  default: api
} = require("../../http/api")

// components/hotSearchList/hotsearchlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    variable: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hotSearchList: [],
    searchList: [],
    historyList: null,
    flag: 1,



  },

  /**
   * 组件的方法列表
   */
  methods: {
 

    deletHistory() {
      wx.removeStorageSync('history')
      this.setData({
        historyList: null
      })
    },
    goToOneSong(e) {
    
      console.log(e)
      if (!wx.getStorageSync('history')) {
        wx.setStorageSync('history', [])
      }

      let arr = wx.getStorageSync('history')
      console.log(arr)
      let one = e.currentTarget.dataset.item.keyword

      arr.unshift(one)
      arr = arr.filter((item, index) => {
        return JSON.stringify(arr).indexOf(JSON.stringify(item)) != -1
      })
      console.log(arr)
      wx.setStorageSync('history', arr)
      let arr1 = wx.getStorageSync('history')


      this.setData({
        historyList: arr1,
        flag: 2,
      })
      wx.navigateTo({
        url: '/pages/searchDetailPage/searchDetailPage',
      })
      this.triggerEvent('send', this.data.flag)

  




    }

  },
  lifetimes: {
    ready() {
      console.log(this.data.variable)
      console.log(222)
      api.getHotSearchList().then(res => {
        this.setData({
          searchList: res.data
        })
        console.log(this.data.searchList)

      }).catch(err => {
        console.log(err)
      })
      if (!wx.getStorageSync('history')) {
        wx.setStorageSync('history', [])
        this.setData({
          historyList: null
        })



      } else {
        let arr = wx.getStorageSync('history')


        this.setData({
          historyList: arr
        })
        console.log(wx.getStorageSync('history'))

      }


    }
  },
  observers: {

    'variable'(variable) {
      if (variable) {
        api.getSearchData(variable).then(res => {
          console.log(res)
          if (res.result.allMatch.length > 10) {
            this.setData({
              hotSearchList: res.result.allMatch.slice(0, 10)
            })
          } else {
            this.setData({
              hotSearchList: res.result.allMatch
            })
          }

          console.log(this.data.hotSearchList)

        }).catch(err => {
          console.log(err)
        })
      }
    }


  }
})