import { InjectionKey, ref } from 'vue'
import defaultTodos from './Todo.json'

type Todo = {
    id:number,
    title: string
}

// export const todos = ref<Todo[]>(defaultTodos);
// export const addTodo = (title: string) => {
//     const newTodo: Todo = {
//         id: Math.random(),
//         title
//     }
//     todos.value.push(newTodo)
// }

export const todos = (() => {
    const todos = ref<Todo[]>(defaultTodos);

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Math.random(),
            title
        }
        todos.value.push(newTodo)
    }

    return { todos, addTodo }
})() // () ...実行時済

type  TodosType = typeof todos
export const todoKey: InjectionKey<TodosType> = Symbol('useTodos');