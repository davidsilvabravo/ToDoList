import { AiOutlineCloseCircle } from 'react-icons/ai';

function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return ( 
    <div className="todo" onClick={handle}>
      {todo.text}
      &nbsp;&nbsp;&nbsp;(-)
    </div>
  )
}

export default Todo;