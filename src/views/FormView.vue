<script lang="ts" setup>
import type { Ref } from 'vue'
import { useForm } from '../composables/useForm'
import type { Todo } from '../type/todo'
import Button from '../components/Button.vue'

import { inject } from 'vue'
import InputText from '../components/InputText.vue'
const todoList = inject<Ref<Todo[]>>('todoList')

const { formTitle, formError, addTodo } = useForm(todoList)
</script>

<template>
  <form @submit.prevent="addTodo" class="w-fit flex flex-col gap-2 item-center justify-center">
    <InputText
      name="formTitle"
      id="formTitle"
      placeholder="Check food supply"
      v-model:formTitle="formTitle"
      label="Title"
    />
    <p v-show="formError !== ''" class="text-red-500">{{ formError }}</p>
    <Button type="submit" class="w-fit p-2" label="Add" />
  </form>
</template>
