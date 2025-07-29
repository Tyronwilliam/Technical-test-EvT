import { ref } from 'vue'
import type { Todo } from '../type/todo'
import { getTodo } from '../services/todo'
import { delay } from '../utils/delay'

export function useTodoList() {
  const todoList = ref<Todo[]>([])
  const isLoading = ref(false)
  const errorApi = ref('')

  const fetchTodolist = async () => {
    isLoading.value = true
    try {
      await delay(2500)
      const { data, status } = await getTodo()
      if (status !== 200) throw new Error('Error while fetching todos')
      todoList.value = data.slice(0, 10)
    } catch (error: any) {
      errorApi.value = error.message || 'Unknown Error'
      console.warn('Error while fetching todos', error)
    } finally {
      isLoading.value = false
    }
  }

  const deleteTodo = (todoId: Todo['id']) => {
    todoList.value = todoList.value.filter((todo: Todo) => todo.id !== todoId)
  }

  return {
    todoList,
    isLoading,
    errorApi,
    fetchTodolist,
    deleteTodo
  }
}
