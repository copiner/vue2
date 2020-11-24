<template>
    <div>
      {{pwd}}
    </div>
</template>
<script>

import Item from "./item.vue"

export default {
    name: 'home-pwd',
    data () {
        return {
          pwd:"pwd"
        }
    },
    components:{
      Item
    }
}

</script>

<style></style>
