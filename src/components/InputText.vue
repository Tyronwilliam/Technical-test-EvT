<script lang="ts" setup>
const model = defineModel<string>('formTitle')
defineProps<{
  id: string
  name: string
  placeholder: string
  label?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2 mx-auto">
    <label :for="id" v-if="label">{{ label }} :</label>
    <input
      class="w-full max-w-[200px] h-9 border-2"
      type="text"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
</template>
