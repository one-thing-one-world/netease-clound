// pages/singer/singer.js
import api from '../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zimu: [{
        name: "热",
        initial: "-1",
      },
      {
        name: "A",
        initial: "a",
      },
      {
        name: "B",
        initial: "b",
      },
      {
        name: "C",
        initial: "c",
      },
      {
        name: "D",
        initial: "d",
      },
      {
        name: "E",
        initial: "e",
      },
      {
        name: "F",
        initial: "f",
      },
      {
        name: "G",
        initial: "g",
      },
      {
        name: "H",
        initial: "h",
      },
      {
        name: "I",
        initial: "i",
      },
      {
        name: "J",
        initial: "j",
      },
      {
        name: "K",
        initial: "k",
      },
      {
        name: "L",
        initial: "l",
      },
      {
        name: "M",
        initial: "m",
      },
      {
        name: "N",
        initial: "n",
      },
      {
        name: "O",
        initial: "o",
      },
      {
        name: "P",
        initial: "p",
      },
      {
        name: "Q",
        initial: "q",
      },
      {
        name: "R",
        initial: "r",
      },
      {
        name: "S",
        initial: "s",
      },
      {
        name: "T",
        initial: "t",
      },
      {
        name: "U",
        initial: "u",
      },
      {
        name: "V",
        initial: "v",
      },
      {
        name: "W",
        initial: "w",
      },
      {
        name: "X",
        initial: "x",
      },
      {
        name: "Y",
        initial: "y",
      },
      {
        name: "Z",
        initial: "z",
      },
    ],
    singerlist: [{
        name: '入驻歌手',
        type: '-1',
        area: '-1',
      },
      {
        name: '华语男歌手',
        type: '1',
        area: '7'
      },
      {
        name: '华语女歌手',
        type: '2',
        area: '7'
      },
      {
        name: '华语组合/乐队',
        type: '3',
        area: '7'
      },
      {
        name: '欧美男歌手',
        type: '1',
        area: '96'
      },
      {
        name: '欧美女歌手',
        type: '2',
        area: '96'
      },
      {
        name: '欧美组合/乐队',
        type: '3',
        area: '96'
      },
      {
        name: '日本男歌手',
        type: '1',
        area: '8'
      },
      {
        name: '日本女歌手',
        type: '2',
        area: '8'
      },
      {
        name: '日本组合/乐队',
        type: '3',
        area: '8'
      },
      {
        name: '韩国男歌手',
        type: '1',
        area: '16'
      },
      {
        name: '韩国女歌手',
        type: '2',
        area: '16'
      },
      {
        name: '韩国组合/乐队',
        type: '3',
        area: '16'
      },
      {
        name: '其他男歌手',
        type: '1',
        area: '0'
      },
      {
        name: '其他女歌手',
        type: '2',
        area: '0'
      },
      {
        name: '其他组合',
        type: '3',
        area: '0'
      },
    ],
    active: 0,
    artists: [],
    flag: 0,
    type: '',
    area: '',
    initial: '',
    index: 0,
    offset:0,


  },
  onClick(e) {
    console.log(e)
    let index = e.detail.index
    this.setData({
      index: index
    })
    console.log(index)

    // type,area,initial


    this.setData({
      flag: 0
    })

    api.getSingerSong(this.data.singerlist[e.detail.index].type, this.data.singerlist[e.detail.index].area, this.data.zimu[0].initial).then(res => {
      this.setData({
        artists: res.artists
      })
    }).catch(err => {
      console.log(err)
    })

  },
  clickEnglish(e) {
    let mm = e.currentTarget.dataset.index
    console.log(e.currentTarget.dataset.index)
    this.setData({
      flag: mm
    })

    api.getSingerSong(this.data.singerlist[this.data.index].type, this.data.singerlist[this.data.index].area, this.data.zimu[mm].initial).then(res => {
      this.setData({
        artists: res.artists
      })
    }).catch(err => {
      console.log(err)
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


    api.getSingerSong(this.data.singerlist[0].type, this.data.singerlist[0].area, this.data.zimu[0].initial).then(res => {
      console.log(res)
      this.setData({
        artists: res.artists
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
    this.data.offset = this.data.offset+30
   this.setData({
    offset:this.data.offset
   })
   console.log(this.data.offset)

    api.getSingerSongs(this.data.singerlist[this.data.index].type, this.data.singerlist[this.data.index].area, this.data.zimu[this.data.flag].initial,this.data.offset).then(res => {
      console.log(res)
      this.setData({
        artists: res.artists
      })
     
    }).catch(err => {
      console.log(err)
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})