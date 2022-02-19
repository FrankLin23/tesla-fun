// components/tesla-swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      const {current} = e.detail;
      this.setData({
        current
      })
    },
    
    viewConfiguration(e) {
      if (e.currentTarget.dataset === null) {
        return ;
      }
      const { productId } = e.currentTarget.dataset;
      wx.navigateTo({
        url: `/pages/product/index?id=${ productId }`,
      }); 
    },

    onBookBtnClick() {
      this.triggerEvent('on-book-btn-click');
    }
  }
})
