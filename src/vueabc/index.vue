<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <h2>Button组件</h2>
      <p>1.基础样式：type</p>
      <libabc-button>default</libabc-button>
      <libabc-button type="success">success</libabc-button>
      <libabc-button type="error">error</libabc-button>
      <libabc-button type="warning">warning</libabc-button>
      <libabc-button type="info" style="min-width:120px">info</libabc-button>
      <p>2.按钮大小：size</p>
      <libabc-button>default</libabc-button>
      <libabc-button size="small">small</libabc-button>
      <libabc-button size="medium">medium</libabc-button>
      <libabc-button size="large">large</libabc-button>
      <p>3.按钮形状：shape</p>
      <libabc-button>default</libabc-button>
      <libabc-button shape="circle" type="info">circle</libabc-button>
      <libabc-button shape="rectangle" type="info">rectangle</libabc-button>
      <p>4.禁用按钮：isDisabled</p>
      <libabc-button isDisabled>default</libabc-button>
      <libabc-button type="success" isDisabled>success</libabc-button>
      <libabc-button type="error" isDisabled>error</libabc-button>
      <libabc-button type="warning" isDisabled>warning</libabc-button>
      <libabc-button type="info" isDisabled>info</libabc-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to libabc',
      size: '',
    }
  },
  methods: {

  }
}
</script>
