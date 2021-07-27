//Actions Constant
export const ADD = "ADD_TODO"
export const DEL = "DELETE_TODO"
export const LOAD = "LOAD_TODO"

//Actions
export const addTodo = (todo) => ({
  type: ADD,
  payload: {
    id: Math.random().toString(),
    todo: todo
  }
})

export const delTodo = (id) => ({
  type: DEL,
  payload:id
})