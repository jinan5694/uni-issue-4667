

<template>
  <view>
    <view>
      详情页数据使用列表也传递过来的id在store中找到匹配，并赋值到当前data中。点击save会把修改后的数据更新到store。
    </view>
    <view style="color: red;">
      注意：点击save后 index 页面的updated 会执行。这是不符合我的预期的。
    </view>
    <view style="color: red;">
      请问这种行为是bug还是什么机制？是否可以利用这种机制实现 index 页面的回更？将来是否会改变这种行为？
    </view>
    <input type="text" v-model="item.id">
    <input type="text" v-model="item.text">
    <button @click="save">save</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      item: {}
    }
  },
  onLoad({ id }) {
    // 保存id
    this.id = id
    // 获取store数据到page
    const item = this.$store.state.todos.find(item => item.id === id)
    this.item = Object.assign({}, this.item, item)
  },
  methods: {
    save() {
      // 用当前页数据 更新store
      const index = this.$store.state.todos.findIndex(item => item.id === this.id)
      this.$set(this.$store.state.todos, index, this.item)

      // 重点！！！此时，触发了 index 页面的 updated 方法。但是 index 页面并没有显示。注意控制台。
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid blue;
}
</style>
