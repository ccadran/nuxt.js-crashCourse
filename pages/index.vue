<script setup>
// const { sayHello } = useUtils();
// sayHello();
const { $sayHello } = useNuxtApp();
console.log(useNuxtApp());
$sayHello("Guillaume");
</script>

<template>
  <div class="main">
    <h1>main page</h1>
    <!-- <img src="/papillon-corail.png" alt="" /> -->
    <IconsBell />
  </div>
</template>
