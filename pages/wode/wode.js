// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  cyh(){
    wx.request({
      url: 'https://www.cyh.plus/api/wd.php',
      method: 'get',
      data:{
        type1:1,
        type2:3
      },
      success: (res)=>{
         console.log(res.data);
        this.setData({
          cyh1: res.data
        })
      }
    }),

    wx.request({
      url: 'https://www.cyh.plus/api/wd.php',
      method: 'get',
      data:{
        type1:4,
        type2:6
      },
      success: (res)=>{
         console.log(res.data);
        this.setData({
          cyh2: res.data
        })
      }
    }),
    wx.request({
      url: 'https://www.cyh.plus/api/wd.php',
      method: 'get',
      data:{
        type1:7,
        type2:15
      },
      success: (res)=>{
         console.log(res.data);
        this.setData({
          cyh3: res.data
        })
      }
    }),
    wx.request({
      url: 'https://www.cyh.plus/api/wd.php',
      method: 'get',
      data:{
        type1:16,
        type2:19
      },
      success: (res)=>{
         console.log(res.data);
        this.setData({
          cyh4: res.data
        })
      }
    }),
    wx.request({
      url: 'https://www.cyh.plus/api/wd.php',
      method: 'get',
      data:{
        type1:20,
        type2:23
      },
      success: (res)=>{
         console.log(res.data);
        this.setData({
          cyh5: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.cyh()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})