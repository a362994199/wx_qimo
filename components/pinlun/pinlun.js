// components/pinlun/pinlun.js
Component({
  /**
   * 组件的属性列表
   */
  lifetimes: {
    attached: function() {
      wx.request({
        url: 'https://www.cyh.plus/api/pl.php',
        method: 'post',
        success: (res)=>{
           console.log(res.data);
          this.setData({
            cyh: res.data
          })
        },
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function() {
    // 在组件实例进入页面节点树时执行
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
