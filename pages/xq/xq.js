// pages/xq/xq.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cyh:[],
    query:'',
    cyh1:[]
  },

  cyhif(){
    if(this.data.query.id==this.data.cyh.id){

    }
  },
  cyhwz(){
    wx.request({
      url: 'https://www.cyh.plus/api/sql_api1.php',
      data:{
        type: this.data.query.id,
      },
      method: 'GET',
      success: (res)=>{
         console.log(res.data);
        this.setData({
          cyh: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    }),
    this.cyhwz()
    console.log(this.data.query.id);
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