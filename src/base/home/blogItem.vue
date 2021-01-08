<template>
  <div>
    <ul>
      <li v-for="item in posts">{{ item.title }}</li>
    </ul>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <p>Computed reversed message is: {{ reversedMessage }}</p>


    <div>
        数量： <input type="text" v-model="num">
        单价： <input type="text" v-model="price">
        总价： <input type="text" v-model="total">
    </div>

    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>

    <h1 v-show="message">Hello!</h1>
  </div>
</template>
<script>

export default {
    name: 'home',
    props: ['posts'],
    data () {
        return {
          message:"",
          price:10,
          num:1,
          total:10,

          selected: '01',
          options: [
            { text: 'One', value: '01' },
            { text: 'Two', value: '02' },
            { text: 'Three', value: '03' }
          ]
        }
    },
    created: function () {
      console.log(this.posts)
    },
    methods: {

    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    },
    watch: {
      num: function (oldvalue,newvalue) {
          this.total = this.num*this.price
      },
      price:function () {
          this.total = this.num*this.price
      }
    }

}
/*
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。
这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。
当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的
*/
</script>

<style></style>
