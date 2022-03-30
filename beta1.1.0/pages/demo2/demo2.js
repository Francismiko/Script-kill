// pages/demo2/demo2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        displayBool1:'',
        displayBool2:'',
        elementNums1: 6,
        elementNums2: 6
    },

    /**
     * <更多>的点击事件函数--加载剩余demo
     */
    moreClick1:function(){
        var newDisplay = 'none';
        var newNum = 24;
        this.setData({
            displayBool1: newDisplay,
            elementNums1: newNum
        });
    },

    moreClick2:function(){
        var newDisplay = 'none';
        var newNum = 24;
        this.setData({
            displayBool2: newDisplay,
            elementNums2: newNum
        });
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