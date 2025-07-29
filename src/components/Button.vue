<script lang="ts" setup>
defineProps<{
  type: 'button' | 'submit' | 'reset'
  label: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    :type="type"
    @click="emit && emit('click')"
    :disabled="disabled"
    :class="[disabled ? 'cursor-not-allowed bg-gray-400 hover: ' : 'bg-gray-900 hover:bg-gray-800']"
  >
    {{ label }}
  </button>
</template>
