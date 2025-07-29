import { ref, type Ref } from 'vue'
import { noNumberAllowed } from '../utils/regex'
import type { Todo } from '../type/todo'

export const useForm = (todoList: Ref<Todo[], Todo[]> | undefined) => {
  const formError = ref('')
  const formTitle = ref<Todo['title']>('')

  const addTodo = () => {
    if (!noNumberAllowed.test(formTitle.value)) {
      return (formError.value = 'Number Not Allowed')
    }

    const newTodo: Todo = {
      id: todoList!.value?.length + 1,
      userId: 2,
      title: formTitle.value,
      completed: false
    }
    todoList!.value = [newTodo, ...todoList!.value]
    formTitle.value = ''
  }

  return { formTitle, formError, addTodo }
}
