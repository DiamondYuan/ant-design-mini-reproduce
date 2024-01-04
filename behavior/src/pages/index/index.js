Page({
  data: {
    size: 1,
  },

  onChange(event) {
    this.setData({
      size: this.data.size + 1,
    });
  },
});
