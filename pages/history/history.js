// pages/history/history.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        history: []
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
        this.setData({history: wx.getStorageSync('history')})
    },

    onTapItem: function(e){
        wx.reLaunch({
          url: `/pages/index/index?query=${e.currentTarget.dataset.query}`,
        })
    }
})