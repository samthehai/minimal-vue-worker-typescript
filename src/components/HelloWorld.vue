<script setup lang="ts">
import myWorker from "@/my-worker";

defineProps<{
  msg: string
}>()

const handleClick = () => {
  myWorker.send("Hello worker!").then((reply: any) => alert(reply));
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="handleClick">Send message</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
