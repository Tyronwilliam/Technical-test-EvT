<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getTodo } from './services/todo'
import type { Todo } from './type/todo'
import TodoView from './views/TodoView.vue'
import { useForm } from './composables/useForm'
import InputText from './components/InputText.vue'

const todoList = ref<Todo[]>([])
const isLoading = ref<boolean>(false)
const errorApi = ref('')
const { formTitle, errorForm, addTodo } = useForm(todoList)
const completedTodos = computed(() => todoList.value.filter((todo) => todo.completed))

const incompleteTodos = computed(() => todoList.value.filter((todo) => !todo.completed))

const deleteTodo = (todoId: Todo['id']) => {
  const filterTodolist = todoList.value.filter((todo) => todo.id !== todoId)
  todoList.value = filterTodolist
}
const fetchTodolist = async () => {
  isLoading.value = true
  try {
    const { data, status } = await getTodo()
    if (status !== 200) {
      throw new Error(`Error while fetching todos`)
    }
    todoList.value = data.slice(0, 10)
  } catch (error: any) {
    errorApi.value = error.message || 'Unknown Error'
    console.warn('Error while fetching todos', error)
  } finally {
    isLoading.value = false
  }
}
onMounted(() => {
  fetchTodolist()
})
</script>

<template>
  <main class="w-full flex items-center justify-center border-2 p-4">
    <p v-if="isLoading">Please wait while fetching Todos</p>
    <section v-else class="w-full h-full flex flex-col items-center justify-center">
      <TodoView
        :deleteTodo="deleteTodo"
        :completedTodos="completedTodos"
        :incompleteTodos="incompleteTodos"
      />

      <form @submit.prevent="" class="w-fit flex flex-col gap-2 item-center justify-center">
        <div class="flex flex-col gap-2 mx-auto">
          <label for="formTitle">Todo title :</label>
          <InputText
            name="formTitle"
            id="formTitle"
            placeholder="Check food supply"
            v-model:formTitle="formTitle"
          />
        </div>
        <p v-show="errorForm !== ''" class="text-red-500">{{ errorForm }}</p>
        <button type="submit" class="w-fit p-2" @click="addTodo">Add</button>
      </form>
    </section>
  </main>
</template>

<style scoped></style>
