<script lang="ts" setup>
import type { Ref } from 'vue'
import { useForm } from '../composables/useForm'
import type { Todo } from '../type/todo'
import Button from '../components/Button.vue'
import { inject } from 'vue'
import InputText from '../components/InputText.vue'
import Error from '../components/Error.vue'

const todoList = inject<Ref<Todo[]>>('todoList')

const { formTitle, formError, isDisabled, isLoading, addTodo } = useForm(todoList)
</script>

<template>
  <form
    @submit.prevent="addTodo"
    class="w-fit h-fit flex flex-col gap-2 justify-center mb-4 bg-slate-700 border-gray-900 p-4 rounded-md border-2"
  >
    <div class="w-fit flex gap-2">
      <InputText
        name="formTitle"
        id="formTitle"
        placeholder="Check food supply"
        v-model:formTitle="formTitle"
        label="Add todo"
      />
      <Button
        type="submit"
        class="w-fit h-fit p-2 self-end"
        :label="isLoading ? 'Saving...' : 'Save'"
        :disabled="isDisabled"
        :loading="isLoading"
      />
    </div>
    <Error :error="formError" />
  </form>
</template>
