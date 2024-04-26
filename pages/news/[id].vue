<template>
  <div>新闻内容{{ route.params.id }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped></style>
