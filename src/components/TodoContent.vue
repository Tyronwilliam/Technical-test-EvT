<script lang="ts" setup>
import type { Todo } from '../type/todo'
import Button from './Button.vue'

const emits = defineEmits(['deleteTodo'])
defineProps<{
  todo: Todo
}>()

const handleDeleteTodo = (todoId: Todo['id']) => {
  emits('deleteTodo', todoId)
}
</script>

<template>
  <h2 class="capitalize">{{ todo.title }}</h2>
  <span
    class="w-4 h-4 rounded-full absolute bottom-[10px] left-[10px]"
    :class="[todo.completed ? 'bg-green-600' : 'bg-red-600']"
  ></span>
  <Button
    class="w-fit p-2 text-sm self-end rounded-md"
    type="button"
    @click="handleDeleteTodo(todo.id)"
    label="Delete"
  />
</template>
