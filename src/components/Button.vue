<script lang="ts" setup>
defineProps<{
  type: 'button' | 'submit' | 'reset'
  label: string
  disabled?: boolean
  loading?: boolean
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
    :class="[
      disabled ? 'cursor-not-allowed bg-gray-400 ' : 'cursor-pointer bg-gray-900 hover:bg-gray-800',
      loading && 'cursor-progress'
    ]"
  >
    {{ label }}
  </button>
</template>
