<script lang="ts" setup>
defineProps<{
  error: string
}>()
</script>

<template>
  <p v-show="error !== ''" class="text-red-500 italic text-sm">{{ error }}</p>
</template>
