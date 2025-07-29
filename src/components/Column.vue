<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full lg:w-fit">
    <span
      class="text-center inline-block w-full font-bold rounded-t-md border-t-2 border-l-2 border-r-2 py-4 border-gray-900 bg-slate-700"
      >{{ title }}</span
    >
    <div
      class="flex lg:flex-col gap-4 p-2 max-h-[600px] overflow-y-scroll border-2 border-gray-900 rounded-b-md shadow-2xl bg-slate-700"
    >
      <slot />
    </div>
  </div>
</template>
