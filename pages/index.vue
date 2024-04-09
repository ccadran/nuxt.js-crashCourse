<script setup lang="ts">
import { useCounterStore } from "~/stores/mystore.js";
const counter = useCount();

const { data: products, pending } = await useLazyFetch("/api/products");
</script>

<template>
  <h1>Hello</h1>
  <p>{{ pending ? "Loading" : products }}</p>
  <Counter id="counter" />
</template>
