<script setup lang="ts">
import { useCounterStore } from "~/stores/mystore.js";
const counter = useCount();
</script>

<template>
  <div>
    <div id="main">
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter id="counter" />
  </div>
</template>
