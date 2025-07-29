import { ref } from 'vue'
import type { Todo } from '../type/todo'

export function useTodoUI() {
  const openedTodoId = ref<Todo['id'] | null>(null)

  const toggleIsOpen = (todoId: Todo['id']) => {
    openedTodoId.value = openedTodoId.value === todoId ? null : todoId
  }

  return {
    openedTodoId,
    toggleIsOpen
  }
}
