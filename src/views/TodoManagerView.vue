<script lang="ts" setup>
import { computed, onMounted, provide } from 'vue'
import { useTodoUI } from '../composables/useTodoUI'
import { useTodoList } from '../composables/useTodoList'
import FormView from './FormView.vue'
import TodoView from './TodoView.vue'
import Error from '../components/Error.vue'

const { todoList, isLoading, errorApi, fetchTodolist, deleteTodo } = useTodoList()
const { openedTodoId, toggleIsOpen } = useTodoUI()

provide('todoList', todoList)

const completedTodos = computed(() => todoList.value.filter((todo) => todo.completed))

const incompleteTodos = computed(() => todoList.value.filter((todo) => !todo.completed))

onMounted(fetchTodolist)
</script>

<template>
  <Error v-if="!isLoading && errorApi" :error="errorApi" />
  <p v-else-if="isLoading && !errorApi">Please wait while fetching Todos</p>
  <section v-else class="w-full h-full flex flex-col items-center justify-center">
    <FormView />
    <TodoView
      :deleteTodo="deleteTodo"
      :completedTodos="completedTodos"
      :incompleteTodos="incompleteTodos"
      :openedTodoId="openedTodoId"
      :toggleIsOpen="toggleIsOpen"
    />
  </section>
</template>
