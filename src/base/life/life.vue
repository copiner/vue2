<template>
  <div ref="p">
    <p>The life {{ message }} tips.</p>
  </div>
</template>
<script>

export default {
    name: 'home',
    data () {
        return {
          message: 'wdaonngg'
        }
    },
    beforeCreate: function () {
        console.group('beforeCreate 创建前状态===============》');
        console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //undefined
        console.log("%c%s", "color:red","message: " + this.message)
     },
     created: function () {
        console.group('created 创建完毕状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
     },
     beforeMount: function () {
        console.group('beforeMount 挂载前状态===============》');
        console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
     },
     mounted: function () {
        console.group('mounted 挂载结束状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log(this.$data)
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化

        console.log("%c%s", "color:red","实例原型，实例原型的原型");

        //vm
        console.log(this)
        //console.log(Object.getPrototypeOf(this))

        //实例原型
        var _this = Object.getPrototypeOf(this);

        //实例原型的原型
        console.log(Object.getPrototypeOf(_this));

        // for(let k in this){
        //   console.log(k)
        // }

        //$refs
        console.log("%c%s", "color:red","refs: " + this.$refs);
        console.log(this.$refs)

        //$destory
        //console.log(this.$destroy())

        //$root
        console.log("%c%s", "color:red","root: " + this.$root);
        console.log(this.$root)

        //parent
        console.log("%c%s", "color:red","parent: " + this.$parent);
        console.log(this.$parent)

        //options
        console.log("%c%s", "color:red","options: " + this.$options);
        console.log(this.$options)
     },
     beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
     },
     updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
     },
     beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
     },
     destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message)
     }

}

</script>

<style></style>
