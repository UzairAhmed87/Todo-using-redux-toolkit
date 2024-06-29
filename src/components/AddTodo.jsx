import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/Todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input !== "") {
          dispatch(addTodo(input))
        setInput('')
        }
        
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-5 flex justify-center items-center w-full">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-gray-800 focus:ring-2 focus:ring-gray-800 text-base focus:bg-white outline-none  text-gray-800 font-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-3/4"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg w-1/2 "
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo