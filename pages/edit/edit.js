// pages/edit/edit.js
import dayjs from '../../lib/dayjs.min.js'
import areajs from '../../lib/area'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    profile: "",
    birthday: "",
    areajs: areajs,
    show: false,
    city: "",
    province: "",
    region: ['', '', ''],




  },
  bindRegionChange(e) {
    console.log(e)
    let ok = e.detail.value
    console.log(ok)
    this.data.region = ok


    this.setData({
      region: ok,
      province: ok[0],
      city: ok[1]
    })


  },
  bindcancel() {

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let one = wx.getStorageSync('profile')
    let time = one.profile.birthday
    let province = one.profile.province
    let city = one.profile.city

    console.log(province)
    console.log(city)

    for (const key in this.data.areajs.city_list) {
      if (key == city) {
        let one = this.data.areajs.city_list[key]
        this.setData({
          city: one
        })
      }
    }
    for (const key in this.data.areajs.province_list) {
      if (key == province) {
        let one = this.data.areajs.province_list[key]
        this.setData({
          province: one
        })
      }
    }




    time = dayjs(time).format("YYYY-MM-DD")

    this.setData({

      profile: one,
      birthday: time,
      region: [this.data.province, this.data.city]



    })
    console.log(this.data.areajs)


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})