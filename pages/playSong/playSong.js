// pages/playSong/playSong.js
const backgroundAudioManager = wx.getBackgroundAudioManager()
import api from '../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotateFlag: true,
    value: "",
    time1: '0:00',
    min:'0:00',
    max:'4:00',
    time:"",
    flag:false,
    currentTime:"",
    time2:""
  },
  changeStatus() {
    this.setData({
      rotateFlag: !this.data.rotateFlag
    })
    console.log(this.data.rotateFlag)
    console.log(555)
  },
  slider1change(e) {
    
    console.log(e.detail)
    let time = e.detail.value
    backgroundAudioManager.seek(time)
    // backgroundAudioManager.stop()

    
    

    this.setData({
      time:time,
      flag:true,
      value:time
    })
   

    let second = '00';

    let minite = 0;

    if (time > 60) {

      minite = parseInt(time / 60);
      second = time % 60;
      console.log(minite)
      console.log(second)

      if (second < 10) {
        let oneTime = `${minite}:0${second}`
        // let times = minite+":"+second
        this.setData({
          time1: oneTime
        })
      } else {
        let oneTime = `${minite}:${second}`
        // let times = minite+":"+second
        this.setData({
          time1: oneTime
        })
      }
    } else if (time < 60 && time > 0) {
      if (time < 10) {
        second = time
        let oneTime = `${minite}:0${second}`
        // let times = minite+":"+second
        this.setData({
          time1: oneTime
        })
      } else {

        second = time
        let oneTime = `${minite}:${second}`
        // let times = minite+":"+second
        this.setData({
          time1: oneTime
        })
      }
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

    let songItem = wx.getStorageSync('songItem')
    console.log(songItem)
    let time = 0;
    api.getUrl(songItem.id).then(res => {
      console.log(res)
      backgroundAudioManager.title = songItem.name
      backgroundAudioManager.epname = songItem.name
      backgroundAudioManager.singer = '许巍'
      backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
      // 设置了 src 之后会自动播放
      if(res.data[0].url){
        backgroundAudioManager.src = res.data[0].url
      }
      console.log(res.data[0].url)
   

      
      console.log(backgroundAudioManager)
      console.log(backgroundAudioManager.src)
  
      
      this.setData({
        currentTime:Math.floor(backgroundAudioManager.duration)
      })
      console.log(this.data.currentTime)

      let second1 = '00';

      let minite1 = 0;

      if (this.data.currentTime > 60) {
        minite1 = parseInt(this.data.currentTime / 60);
        second1 = this.data.currentTime % 60;
        console.log(minite1)
        console.log(second1)

        if (second1 < 10) {
          let oneTime = `0${minite1}:0${second1}`
          
          this.setData({
            time2: oneTime
          })
        } else {
          let oneTime = `0${minite1}:${second1}`
          // let times = minite+":"+second
          this.setData({
            time2: oneTime
          })
        }
      } else if (this.data.currentTime  < 60 && this.data.currentTime  > 0) {
        if (this.data.currentTime  < 10) {
          second1 = this.data.currentTime 
          let oneTime = `0${minite1}:0${second1}`
          // let times = minite+":"+second
          this.setData({
            time2: oneTime
          })
        } else {

          second1 = this.data.currentTime 
          let oneTime = `0${minite1}:${second1}`
          // let times = minite+":"+second
          this.setData({
            time2: oneTime
          })
        }
      }


      
      backgroundAudioManager.onTimeUpdate(() => {
       
        if(this.data.flag){
          backgroundAudioManager.currentTime = this.data.time
          var times = Math.floor(backgroundAudioManager.currentTime)
          this.setData({
            flag:false
          })
        }else{
          var times = Math.floor(backgroundAudioManager.currentTime)
          this.setData({
            value:times
          })
        }

   
        // console.log(times)
       
        let second = '00';

        let minite = 0;

        if (times > 60) {
          minite = parseInt(times / 60);
          second = times % 60;
          // console.log(minite)
          // console.log(second)

          if (second < 10) {
            let oneTime = `${minite}:0${second}`
            // let times = minite+":"+second
            this.setData({
              time1: oneTime
            })
          } else {
            let oneTime = `${minite}:${second}`
            // let times = minite+":"+second
            this.setData({
              time1: oneTime
            })
          }
        } else if (times < 60 && times > 0) {
          if (times < 10) {
            second = times
            let oneTime = `${minite}:0${second}`
            // let times = minite+":"+second
            this.setData({
              time1: oneTime
            })
          } else {

            second = times
            let oneTime = `${minite}:${second}`
            // let times = minite+":"+second
            this.setData({
              time1: oneTime
            })
          }
        }

      
      })

      backgroundAudioManager.play()
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