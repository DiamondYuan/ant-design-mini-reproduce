// pages/test.js
Component({
  behaviors: [
    Behavior({
      created() {
        console.log("defineProperty");
        Object.defineProperty(this, "parent", {
          get: () => "1",
        });
      },
    }),
  ],
  /**
   * 组件的属性列表
   */
  properties: {
    size: {
      // 属性名
      type: String,
      value: "",
      observer: function resize() {
        console.log("observer", this.parent);
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
});
