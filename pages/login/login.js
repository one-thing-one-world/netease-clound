// pages/login/login.js
import api from "../../http/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: ''

  },
  goToRegister() {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  goTologin1() {
    if (this.data.value1 !== "" && this.data.value2 !== "") {
      api.login1(this.data.value1, this.data.value2).then(res => {
        console.log(res)
        if (res.code === 200) {
          wx.switchTab({
            url: '../mine/mine'
          })
          wx.setStorageSync('profile', res)




        }
      }).catch(err => {
        console.log(err)
      })
    }

  },
  goTologin2() {
    if (this.data.value3 !== "" && this.data.value4 !== "") {
      api.login2(this.data.value3, this.data.value4).then(res => {
        console.log(res)
        if (res.code === 200) {
          wx.switchTab({
            url: '../mine/mine'
          })
          wx.setStorageSync('profile', res)




        }
      }).catch(err => {
        console.log(err)
      })
    }

  },
  getValue4(e) {

    // this.setData({
    //   value2: e.detail.value
    // })
    let value4 = e.detail.value

    let password = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    console.log(value2)
    if (value4 === "") {
      wx.showToast({
        icon: 'none',
        title: '密码不能为空',
      })

    } else if (!password.test(value4)) {
      wx.showToast({
        icon: 'none',
        title: '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
      })
    } else {

      this.setData({
        value4: e.detail.value
      })
    }


  },
  getValue3(e) {

    let value3 = e.detail.value

    console.log(this.data.value3)
    let email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (value3 === "") {
      wx.showToast({
        icon: 'none',
        title: '验证码不能为空',
      })
    } else if (!email.test(value3)) {
      wx.showToast({
        icon: 'none',
        title: '请输入4位验证码',
      })
    } else {
      this.setData({
        value3: e.detail.value
      })
    }



  },
  getValue2(e) {

    // this.setData({
    //   value2: e.detail.value
    // })
    let value2 = e.detail.value

    let password = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    console.log(value2)
    if (value2 === "") {
      wx.showToast({
        icon: 'none',
        title: '密码不能为空',
      })

    } else if (!password.test(value2)) {
      wx.showToast({
        icon: 'none',
        title: '最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
      })
    } else {

      this.setData({
        value2: e.detail.value
      })
    }


  },
  getValue1(e) {

    // this.setData({
    //   value1: e.detail.value
    // })
    let value1 = e.detail.value
    let verifyNumber = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

    console.log(typeof (this.data.value1))
    console.log(verifyNumber.test(value1))
    if (value1 === "") {

      wx.showToast({
        icon: 'none',
        title: '手机号不能为空',
      })

    } else if (!verifyNumber.test(value1)) {

      wx.showToast({
        icon: 'none',
        title: '请输入11位数字',
      })


    } else {
      this.setData({
        value1: e.detail.value
      })
    }


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