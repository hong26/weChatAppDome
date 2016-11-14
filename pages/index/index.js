var util = require('../../utils/util.js')
Page({
  data: {
    x:util.res[0].title,
    y:util.res[0].summary,
    z:util.res[0].img,
    s:0,
    hidden: false,
  },
  onReady: function (e) {
    var determination = false
    var that = this
    function a(){
      wx.onAccelerometerChange(function(res) {
        that.setData({
          s: res.x
        })
        var len = util.res.length
        var list = Math.floor(Math.random()*(len-1))
        if(res.x>0.3 && res.y>0.3 && !determination){
          determination = true
          determination = that.f(util.res[list])
        }else{
          return
        }
      })
      console.log(0.6*100>0)
    }
    a()
 },
 f: function(res){
      if(res.img){
        this.setData({
          x: res.title,
          y: res.summary,
          z: res.img,
          hidden: false,
        })
      }else{
        this.setData({
          x: res.title,
          y: res.summary,
          hidden: true,
        })        
      }
      return false
 }
})
