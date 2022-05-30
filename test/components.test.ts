import { mount } from '@vue/test-utils'
import TodoList from '../src/components/todo-list/TodoList.vue'

test('renders a todo', () => {
  const wrapper = mount(TodoList)

  const todo = wrapper.get('[data-test="todo"]')

  expect(todo.text()).toBe('Learn Vue.js 3')
})