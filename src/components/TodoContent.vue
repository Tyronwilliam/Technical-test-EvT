<script lang="ts" setup>
import type { Todo } from '../type/todo'
import Button from './Button.vue'

const emits = defineEmits<{
  (e: 'toggleIsOpen', id: Todo['id']): void
  (e: 'deleteTodo', id: Todo['id']): void
}>()

const props = defineProps<{
  todo: Todo
  open: boolean
}>()

const handleDeleteTodo = () => {
  emits('deleteTodo', props.todo.id)
}

const handleToggle = () => {
  emits('toggleIsOpen', props.todo.id)
}
</script>

<template>
  <h2 class="capitalize">{{ todo.title }}</h2>

  <span
    class="w-4 h-4 rounded-full absolute bottom-[10px] left-[10px]"
    :class="todo.completed ? 'bg-green-600' : 'bg-red-600'"
  />

  <div class="flex flex-col gap-2 ">
    <span v-if="open" class="text-sm italic text-slate-300">
      Are you sure you want to delete this todo?
    </span>

    <div class="flex gap-2 self-end">
      <Button
        type="button"
        class="w-fit p-2 text-sm rounded-md"
        :label="open ? 'Yes' : 'Delete'"
        @click="open ? handleDeleteTodo() : handleToggle()"
      />
      <Button
        v-if="open"
        type="button"
        class="w-fit p-2 text-sm rounded-md"
        label="No"
        @click="handleToggle"
      />
    </div>
  </div>
</template>
