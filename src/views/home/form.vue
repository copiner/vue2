<template>
  <div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>

    <p>Multiline messages is:<span>{{ messages }}</span></p>

    <textarea v-model="messages" placeholder="add multiple lines"></textarea>

    <p><input type="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label></p>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

    <p><span>Checked names: {{ checkedNames }}</span></p>

    <div>
      <input type="radio" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

  </div>
</template>
<script>

export default {
    name: 'home',
    data () {
        return {
          name: 'form',
          message:"",
          messages:"",
          checked:false,
          checkedNames:"",
          picked:"",
          selected:""
        }
    }
}

</script>

<style></style>
