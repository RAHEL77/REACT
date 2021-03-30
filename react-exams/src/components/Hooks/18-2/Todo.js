import React, {useState} from 'react';
import Complite from './Complite'

export default const Todo = () => {
  const [todo, setTodo] = useState([
    { id: 1, name: "CSS", completed: true },
    { id: 2, name: "JavaScript", completed: true },
    { id: 3, name: "React", completed: false },
    { id: 4, name: "Node JS", completed: false },
  ]);
return(

<div>{todo.map((e,i) => <Complite text={complite.name} 
compOk={complite.completed}/>
)}
</div>
)}
