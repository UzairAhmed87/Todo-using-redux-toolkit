

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <div className='flex flex-wrap justify-center items-center flex-col max-w-lg mx-auto bg-black p-10 mt-10 rounded-lg'>
      <h1 className='text-3xl font-bold underline text-center mt-5 text-red-700'>Manage Your Todos</h1>
 <AddTodo/>
 <Todos/>
    </div>
  )
}

export default App
