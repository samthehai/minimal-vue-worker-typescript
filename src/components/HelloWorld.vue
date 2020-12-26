<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="handleClick">Send message</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import myWorker from "@/my-worker";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    handleClick() {
      myWorker.send("Hello worker!").then((reply: any) => alert(reply));
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
