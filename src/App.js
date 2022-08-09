import React from "react";
import Addlist from './Components/addList';
import Todo from './Components/addedList';
import Header from "./Components/myheader";


function App() {

  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };



  return (
    <div >
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Addlist addTodo={addTodo}/>
      <br/>
      <div>
      
        {todos.map((todo, index) => 
        (
          <Todo
        key={index}
        index={index}
        todo={todo}
        markTodo={markTodo}
        removeTodo={removeTodo}
      />
        ))
}
</div>
      
      
      
      
      

    </div>
    
    
  );
}

export default App;
