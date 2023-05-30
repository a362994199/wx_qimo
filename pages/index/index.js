// pages/sixiang/sixiang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cyh:[],
    cyh1:[],
    i:1
  },
  cyhlb(){
    wx.request({
      url: 'https://www.cyh.plus/api',
      method: 'post',
      success: (res)=>{
         console.log(res.data.data);
        this.setData({
          cyh: res.data.data
        })
      }
    })
  },
  cyhzy(){
    this.setData({
      isLoading: true,
    });
    wx.showLoading({
      title: '数据加载中 '
    });
    wx.request({
      url: 'https://www.cyh.plus/api/sql_api.php',
      method: 'post',
      success: (res)=>{
         console.log(res.data);
        this.setData({
          cyh1: [...this.data.cyh1, ...res.data],
        })
      },
      complete: () => {
        // 隐藏loading
        wx.hideLoading();
        // 将节流阀设置为 false
        this.setData({
          isLoading: false,
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.cyhlb()
    this.cyhzy()
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
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    });
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.i <= 6){
      this.setData({
        i: this.data.i + 1
      }),
      this.cyhzy()
    }
    else{
      return wx.showToast({
        title: '数据加载完毕'
      })
    }
    
    
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})