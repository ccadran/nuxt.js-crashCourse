<script setup>
definePageMeta({
  layout: "custom",
});

const { sayHello } = useUtils();
sayHello();
</script>

<template>
  <div class="Custom page">custom page</div>
</template>
