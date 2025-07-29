import { ref, watch, type Ref } from 'vue'
import { noNumberAllowed } from '../utils/regex'
import type { Todo } from '../type/todo'

export const useForm = (todoList: Ref<Todo[], Todo[]> | undefined) => {
  const formError = ref('')
  const formTitle = ref<Todo['title']>('')
  const isDisabled = ref<boolean>(false)

  const addTodo = () => {
    const newTodo: Todo = {
      id: todoList!.value?.length + 1,
      userId: 2,
      title: formTitle.value,
      completed: false
    }
    todoList!.value = [newTodo, ...todoList!.value]
    formTitle.value = ''
  }

  watch(formTitle, (newValue) => {
    if (!noNumberAllowed.test(newValue)) {
      isDisabled.value = true
      formError.value = 'Number Not Allowed'
    } else {
      isDisabled.value = false
      formError.value = ''
    }
  })

  return { formTitle, formError, isDisabled, addTodo }
}
