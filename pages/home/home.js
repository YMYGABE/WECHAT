// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age:"19",
    messages:[
      {
        name:'科比',
        messages:'我们去打篮球啊！'
      },
      {
        name:'成龙',
        messages:'你看《A计划》了吗'
      }
    ],
    none:'还是调用，不过更厉害'

  },
  
  clickview:function(event){
    console.log('hhhh')
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