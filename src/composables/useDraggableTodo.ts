import { ref, type Ref } from 'vue'
import type { Todo } from '../type/todo'

export function useDragDropTodos(todoList: Ref<Todo[]>) {
  const draggingTodoId = ref<Todo['id'] | null>(null)
  const dragOverTodoId = ref<Todo['id'] | null>(null)

  function handleDragStart(todoId: Todo['id']) {
    draggingTodoId.value = todoId
  }

  function handleDragEnd() {
    draggingTodoId.value = null
    dragOverTodoId.value = null
  }

  function handleDragOver(todoId: Todo['id'] | null, completed: boolean, event: DragEvent) {
    event.preventDefault()
    dragOverTodoId.value = todoId
  }

  function handleDrop(targetTodoId: Todo['id'] | null, completed: boolean) {
    if (!draggingTodoId.value) return

    const draggedIndex = todoList.value.findIndex((t) => t.id === draggingTodoId.value)
    const draggedTodo = todoList.value[draggedIndex]
    if (!draggedTodo) return

    draggedTodo.completed = completed

    todoList.value.splice(draggedIndex, 1)

    let dropIndex = targetTodoId
      ? todoList.value.findIndex((t) => t.id === targetTodoId)
      : todoList.value.length

    if (dropIndex === -1) dropIndex = todoList.value.length

    todoList.value.splice(dropIndex, 0, draggedTodo)

    handleDragEnd()
  }

  return {
    draggingTodoId,
    dragOverTodoId,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop
  }
}
