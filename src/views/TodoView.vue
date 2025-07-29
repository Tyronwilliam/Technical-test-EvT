<script lang="ts" setup>
import { inject, type Ref } from 'vue'
import Card from '../components/Card.vue'
import Column from '../components/Column.vue'
import TodoContent from '../components/TodoContent.vue'
import { useDragDropTodos } from '../composables/useDraggableTodo'
import type { Todo } from '../type/todo'

const todoList = inject<Ref<Todo[]> | undefined>('todoList')
if (!todoList) throw new Error('todoList not provided')

defineProps<{
  incompleteTodos: Todo[]
  completedTodos: Todo[]
  deleteTodo: (todoId: Todo['id']) => void
  toggleIsOpen: (todoId: Todo['id']) => void
  openedTodoId: Todo['id'] | null
}>()

const {
  draggingTodoId,
  dragOverTodoId,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  handleDrop
} = useDragDropTodos(todoList)

const cardStyle =
  'relative max-w-3xs w-full flex flex-col shrink-0 rounded-md px-3.5 py-2 justify-between min-h-[150px] bg-slate-800 transition-all duration-200 cursor-grab'
const transitionStyle = 'flex lg:flex-col gap-2 w-full items-center'
</script>

<template>
  <section class="w-full md:w-[70%] flex flex-col lg:flex-row justify-center gap-3">
    <Column title="Todo Completed">
      <TransitionGroup name="card-list" tag="div" :class="transitionStyle">
        <Card
          v-for="todo in completedTodos"
          :key="todo.id"
          :class="[
            cardStyle,
            {
              'opacity-50 scale-[0.98]': draggingTodoId === todo.id,
              'ring-2 ring-blue-500': dragOverTodoId === todo.id
            }
          ]"
          draggable="true"
          @dragstart="handleDragStart(todo.id)"
          @dragend="handleDragEnd"
          @dragover.prevent="handleDragOver(todo.id, true, $event)"
          @drop.prevent="handleDrop(todo.id, true)"
        >
          <TodoContent
            :todo="todo"
            @toggle-is-open="toggleIsOpen"
            :open="openedTodoId === todo.id"
            @delete-todo="deleteTodo"
          />
        </Card>
      </TransitionGroup>
    </Column>

    <Column title="Todo Incomplete">
      <TransitionGroup name="card-list" tag="div" :class="transitionStyle">
        <Card
          v-for="todo in incompleteTodos"
          :key="todo.id"
          :class="[
            cardStyle,
            {
              'opacity-50 scale-[0.98]': draggingTodoId === todo.id,
              'ring-2 ring-blue-500': dragOverTodoId === todo.id
            }
          ]"
          draggable="true"
          @dragstart="handleDragStart(todo.id)"
          @dragend="handleDragEnd"
          @dragover.prevent="handleDragOver(todo.id, false, $event)"
          @drop.prevent="handleDrop(todo.id, false)"
        >
          <TodoContent
            :todo="todo"
            @toggle-is-open="toggleIsOpen"
            :open="openedTodoId === todo.id"
            @delete-todo="deleteTodo"
          />
        </Card>
      </TransitionGroup>
    </Column>
  </section>
</template>

<style scoped>
.card-list-move {
  transition:
    transform 0.3s ease,
    opacity 0.2s ease;
}
</style>
