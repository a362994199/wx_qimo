// pages/sixiang/sixiang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cyh:[]
  },

  cyhzy(){
    this.setData({
      isLoading: true,
    });
    wx.showLoading({
      title: '数据加载中 '
    });
    wx.request({
      url: 'https://www.cyh.plus/api/sp.php',
      method: 'post',
      success: (res)=>{
         console.log(res.data);
        this.setData({
          cyh: [...this.data.cyh, ...res.data],
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