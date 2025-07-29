<script lang="ts" setup>
defineProps<{
  type: 'button' | 'submit' | 'reset'
  label: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button :type="type" @click="emit && emit('click')">
    {{ label }}
  </button>
</template>
