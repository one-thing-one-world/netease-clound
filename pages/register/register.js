// pages/register/register.js
import api from "../../http/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 30,
    flag: false,
    value1: "",
    value2: "",
    value3: "",
    value4: "",

  },
  //patt.test
  getValue4(e) {
    let value4 = e.detail.value
    if (value4 === "") {
      wx.showToast({
        title: '昵称不能为空',
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
    let verifyCode = /^\d{4}$/
    if (value3 === "") {
      wx.showToast({
        icon: 'none',
        title: '验证码不能为空',
      })
    } else if (!verifyCode.test(value3)) {
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
  handleRegister() {
    api.verifyVerifyCode(this.data.value1, this.data.value3).then(res => {
      if (res.code === 200) {
        if (this.data.value1 !== "" && this.data.value2 !== "" && this.data.value3 !== "" && this.data.value4 !== "") {
          api.register(this.data.value1, this.data.value2, this.data.value3, this.data.value4).then(res => {
            if (res.code == 200) {
              wx.setStorageSync('profile', res)
              wx.switchTab({
                url: '/pages/mine/mine',
              })


            }
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }).catch(err => {
      console.log(err)
    })

    if (this.data.value1 !== "" && this.data.value2 !== "" && this.data.value3 !== "" && this.data.value4 !== "") {

    }



  },

  sendVerifyCode() {
    if (this.data.value1 === "") {
      wx.showToast({
        icon: 'none',
        title: '请输入电话号码',
      })
    } else {
      api.sendVerifyCode(this.data.value1).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      let timer = setInterval(() => {
        this.data.time--
        this.setData({
          time: this.data.time
        })
        if (this.data.time == 0) {
          clearTimeout(timer)
          this.setData({
            flag: false,
            time: 30
          })
        }
      }, 1000)
      this.setData({
        flag: true
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