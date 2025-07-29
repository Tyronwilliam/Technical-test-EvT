import { ref, watch, type Ref } from 'vue'
import { noNumberAllowed } from '../utils/regex'
import type { Todo } from '../type/todo'

export const useForm = (todoList: Ref<Todo[], Todo[]> | undefined) => {
  const formError = ref('')
  const formTitle = ref<Todo['title']>('')
  const isDisabled = ref<boolean>(false)
  const isLoading = ref<boolean>(false)
  const addTodo = () => {
    isDisabled.value = true
    isLoading.value = true
    // Simuler POST API Request
    setTimeout(() => {
      const newTodo: Todo = {
        id: todoList!.value?.length + 1,
        userId: 2,
        title: formTitle.value,
        completed: false
      }

      todoList!.value = [newTodo, ...todoList!.value]
      formTitle.value = ''
      isDisabled.value = false
      isLoading.value = false
    }, 1500)
  }

  function validateTitle(newValue: string) {
    if (!noNumberAllowed.test(newValue)) {
      isDisabled.value = true
      formError.value = 'Number not allowed'
    } else {
      isDisabled.value = false
      formError.value = ''
    }
  }

  watch(formTitle, (newValue) => {
    validateTitle(newValue)
  })

  return { formTitle, formError, isDisabled, isLoading, addTodo }
}
