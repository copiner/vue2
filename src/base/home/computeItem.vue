<template>
  <div>
      数量： <input type="text" v-model="num">
      单价： <input type="text" v-model="price">
      总价： <input type="text" v-model="amt">

      <button v-on:click="base.level = 2">修改</button>
      <p>{{base.level}}</p>

    <div>
       {{ fullName }}
       <div>
         firstName: <input v-model="firstName" />
         lastName: <input v-model="lastName" />
       </div>
     </div>
  </div>
</template>
<script>

export default {
    name: 'compute',
    data () {
        return {
          price:10,
          num:1,
          total:10,
          base:{
            level:'1'
          },
          firstName:"",
          lastName:"",
          fullName:"",
        }
    },
    created: function () {
      console.log(this.todo)
    },
    methods: {

    },
    computed: {
      // 计算属性的 getter
      amt: function () {
        // `this` 指向 vm 实例
        return this.num*this.price
      }
    },
    watch:{
      base:{
        handler: function(newVal, oldVal) {
          console.log(newVal, oldVal)
        },
        deep:true,
        immediate:true
      },
      firstName: function(val) {
        clearTimeout(this.firstTimeout);
        this.firstTimeOut = setTimeout(() => {
      	   this.fullName = val + " " + this.lastName;
        }, 1000);
      },
      lastName: function(val) {
        clearTimeout(this.lastTimeout);
        this.lastTimeOut = setTimeout(() => {
      	   this.fullName = this.firstName + " " + val;
        }, 1000);
      }
    }
}

</script>

<style></style>
