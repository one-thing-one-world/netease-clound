// components/search/search.js
import api from '../../http/api'
import store from "../../store/index"
import create from '../../utils/store/create'
create.Component(store,{
  /**
   * 组件的属性列表
   */
  properties: {
    flag1:{
      type:Boolean
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
   
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    list: [{
        name: '每日推荐',
        url: '../../img/searchPage/recommend1.png'
      },
      {
        name: '歌单',
        url: '../../img/searchPage/songSheet2.png'
      },
      {
        name: '排行榜',
        url: '../../img/searchPage/rankingList3.png'
      },
      {
        name: '电台',
        url: '../../img/searchPage/radioStation4.png'
      },
      {
        name: '直播',
        url: '../../img/searchPage/liveBroadcast5.png'
      },
      {
        name: '火箭排名',
        url: '../../img/searchPage/rocketName6.png'
      },
      {
        name: '数字专辑',
        url: '../../img/searchPage/numberAlbum6.png'
      },
      {
        name: '畅聊',
        url: '../../img/searchPage/chat.png'
      },
    ],
    recommend: [],
    NewSong: [],
    newDisc: [],
    djProgram: [],
    recommends: [],
    value: "",
    variable: "",
    historyFlag: 1,


  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    goToListOfSong(e){
      console.log()
      let id  = e.currentTarget.dataset.item.id
     wx.setStorageSync('id', id)
      wx.navigateTo({
        url: '/pages/songList/songList',
      })
    },
    deletContent() {
      this.setData({
        value: '',
        variable: ''
      })
    },

    goToSearch() {
      this.setData({
        flag1: !this.data.flag1,
        historyFlag:1,
        value: '',
        variable: ''
      })
    },
    inputValue(e) {

      this.setData({
        value: e.detail.value,
        variable: e.detail.value
      })

      console.log(e.detail.value)


    },
    send(e) {
      console.log(e)
      // historyFlag
      let oo = e.detail
      this.setData({
        historyFlag: oo
      })
      console.log(this.data.historyFlag)


    }
  },

  ready() {
    
    api.getBannerUrl().then(res => {
      this.setData({
        background: res.banners
      })
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    api.getReconmmendSong().then(res => {
    
      this.setData({
        recommend: res.result.splice(0, 6)
      })
      // wx.setStorageSync('recommend', this.data.recommend)
      console.log(this.data.recommend)
    }).catch(err => {
      console.log(err)
    })

    api.getNewDisc().then(res => {
      console.log(res)
      this.setData({
        newDisc: res.albums.slice(0, 6)
      })
    }).catch(err => {
      console.log(err)
    })

    api.getNewSong().then(res => {
      console.log(res)
      this.setData({
        NewSong: res.result.slice(0, 6)
      })
    }).catch(err => {
      console.log(err)
    })

    api.getDjProgram().then(res => {
      console.log(res)
      this.setData({
        djProgram: res.result.slice(0, 6)
      })
    }).catch(err => {
      console.log(err)
    })

    api.getRecommend().then(res => {
      console.log(res)
      this.setData({
        recommends: res.programs.slice(0, 6)
      })
    }).catch(err => {
      console.log(err)
    })
    console.log(333)



  },


})