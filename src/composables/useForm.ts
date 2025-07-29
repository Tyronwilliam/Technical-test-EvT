import { ref, type Ref } from 'vue'
import { noNumberAllowed } from '../utils/regex'
import type { Todo } from '../type/todo'

export const useForm = (todoList: Ref<Todo[]>) => {
  const errorForm = ref('')
  const formTitle = ref<Todo['title']>('')

  const addTodo = () => {
    if (!noNumberAllowed.test(formTitle.value)) {
      return (errorForm.value = 'Number Not Allowed')
    }

    const newTodo: Todo = {
      id: todoList.value.length + 1,
      userId: 2,
      title: formTitle.value,
      completed: false
    }
    todoList.value = [...todoList.value, newTodo]
    formTitle.value = ''
  }

  return { formTitle, errorForm, addTodo }
}
