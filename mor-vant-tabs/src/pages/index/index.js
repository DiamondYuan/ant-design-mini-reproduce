Page({
  data: {
    active: 1,
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: "none",
    });
  },
});
