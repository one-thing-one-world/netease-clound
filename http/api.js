const fly = require('./index')
export default {


  //获取轮播图
  getBannerUrl() {
    return fly.get(`/banner?type=1`)
  },
  //获取每日推荐
  getReconmmendSong() {
    return fly.get(`/personalized`)
  },
  getNewDisc() {
    return fly.get(`/top/album`)
  },
  getNewSong() {
    return fly.get(`/personalized/newsong`)
  },
  getDjProgram() {
    return fly.get(`/personalized/djprogram`)
  },
  getRecommend() {
    return fly.get(`/program/recommend`)
  },
  getSearchData(keywords) {
    return fly.get(`/search/suggest?keywords= ${keywords}&type=mobile`)
  },
  getHotSearchList() {
    return fly.get(`/search/hot/detail`)
  },
  // getCode(phone) {
  //   return fly.get(`/captchant?phone=${phone}`)
  // },
  sendVerifyCode(phoneNumber) {
    return fly.get(`/captcha/sent?phone=${phoneNumber}`)
  },
  verifyVerifyCode(phoneNumber, verifyCode) {
    return fly.get(`/captcha/verify?phone=${phoneNumber}&captcha=${verifyCode}`)
  },
  verifyIsRegister(phoneNumber) {
    return fly.get(`/cellphone/existence/check?phone=${phoneNumber}`)
  },
  register(phoneNumber, password, captcha, nickname) {
    return fly.get(`/register/cellphone?phone=${phoneNumber}&password=${password}&captcha=${captcha}&nickname=${nickname}`)
  },
  login1(phone, password) {
    return fly.get(`/login/cellphone?phone=${phone}&password=${password}`)
  },
  login2(email, password) {
    return fly.get(`/login?email=${email}&password=${password}`)
  },
  getSingerSong(type,area,initial){
    return fly.get(`/artist/list?type=${type}&area=${area}&initial=${initial}`)
  },
  getSingerSongs(type,area,initial,offset){
    return fly.get(`/artist/list?type=${type}&area=${area}&initial=${initial}&limit=${offset}`)
  },
  getListSong(id){
    return fly.get(`/playlist/detail?id=${id}`)
  },
  getUrl(id){
    return fly.get(`/song/url?id=${id}`)
  }
  









}