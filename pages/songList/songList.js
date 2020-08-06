const {
  default: api
} = require("../../http/api")


// pages/songList/songList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist:null,
    privileges:null

  },
  goToPlayPage(e){

    console.log(e.currentTarget.dataset.item)
    let songItem = e.currentTarget.dataset.item

    wx.setStorageSync('songItem', songItem)

    wx.navigateTo({
      url: '/pages/playSong/playSong',
    })
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
    let id = wx.getStorageSync('id')
    console.log(id)

    api.getListSong(id).then(res => {
      console.log(res)
      let playlist = res.playlist
      let privileges = res.privileges
      this.setData({
        playlist:playlist,
        privileges:privileges

      })
    }).catch(err => {
      console.log(err)
    })
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