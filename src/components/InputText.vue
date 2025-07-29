<script lang="ts" setup>
const model = defineModel<string>('formTitle')
defineProps<{
  id: string
  name: string
  placeholder: string
}>()
</script>

<template>
  <input
    class="w-full max-w-[200px] h-9 border-2"
    type="text"
    name="formTitle"
    id="formTitle"
    placeholder="Check food supply"
    v-model="model"
  />
</template>
