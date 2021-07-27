import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux' //ini useDispatch dan useSelector dari react-redux
import { ADD, DEL, LOAD, addTodo, delTodo } from './action'


const upTodo = (todo) => ({
  type: UPDATE,
  payload: 
})

//initial stata /kondisi awal -> ketika object di load pertama kali
const initState = {
  todos: []
}

//reducer function
export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      const {id, todo} = action.payload
      return{
        ...state,
        todos: [
          ...state.todos, 
          {
            id: id, 
            todo: todo
          }
        ]
      }
    case DEL:
      const afterDelete = state.todos.filter(item => item.id !== action.payload)
      return{
        ...state,
        todos: afterDelete
      }
    default:
      return state;
  }
}


export default function TodoList() {
  const [todo, setTodo] = useState("") //todo untuk menyimpan hasil dari element input
  const dispatch = useDispatch()
  const listTodos = useSelector(state => state.todos.todos)
  console.log(listTodos)

  useEffect(() => {
    upTodo()
  }, [])

  const submit = (e) => {
    e.preventDefault()
    if(todo==="") return;
    dispatch(addTodo(todo));
    setTodo("")
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input 
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder="Masukan Todolist..."
        />
        <button>Submit</button>
      </form>
  
      {
        listTodos.map((item, idx) => 
          <ul key={idx}>
            <li>{item.todo}</li>
            <button onClick={() => dispatch(delTodo(item.id))}>X</button>
          </ul>
        )
      }
    </div>
  )
}
