<script lang="ts" setup>
const model = defineModel<string>()
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
      class="w-full max-w-xs h-10 px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-900 transition"
      type="text"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
</template>
