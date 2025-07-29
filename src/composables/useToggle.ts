import { ref } from 'vue'

export const useToggle = () => {
  const isOpen = ref<boolean>(false)

  const toggleIsOpen = () => {
    return (isOpen.value = !isOpen.value)
  }

  return { isOpen, toggleIsOpen }
}
