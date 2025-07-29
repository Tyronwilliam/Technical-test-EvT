<script lang="ts" setup>
import { computed } from 'vue'
import Card from '../components/Card.vue'
import Column from '../components/Column.vue'
import type { Todo } from '../type/todo'
import TodoContent from '../components/TodoContent.vue'
const props = defineProps<{
  todoList: Todo[]
  deleteTodo: (todoId: Todo['id']) => void
}>()
const completedTodos = computed(() => props.todoList.filter((todo) => todo.completed))

const incompleteTodos = computed(() => props.todoList.filter((todo) => !todo.completed))

const cardStyle =
  'relative max-w-[250px] w-full flex flex-col shrink-0 rounded-md px-3.5 py-2 justify-between h-[150px] bg-slate-800'
</script>

<template>
  <section class="w-[70%] flex justify-center gap-3">
    <Column title="Todo Completed">
      <Card v-for="todo in completedTodos" :key="todo.id" :class="cardStyle">
        <TodoContent :todo="todo" @delete-todo="deleteTodo" />
      </Card>
    </Column>
    <Column title="Todo Incomplete">
      <Card v-for="todo in incompleteTodos" :key="todo.id" :class="cardStyle">
        <TodoContent :todo="todo" @delete-todo="deleteTodo" />
      </Card>
    </Column>
  </section>
</template>
