<script setup lang="ts">
import { useCounterStore } from "~/stores/mystore.js";
const counter = useCount();

const { data: productCount, pending } = await useAsyncData("productCount", () =>
  $fetch("/api/products")
);
</script>

<template>
  <h1>Hello</h1>
  <p>{{ pending ? "Loading" : productCount }}</p>
</template>
