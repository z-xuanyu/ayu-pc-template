<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div>
    <TheHeader />
    <div class="main">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss"></style>
