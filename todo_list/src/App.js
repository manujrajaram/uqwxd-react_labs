import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  // Add the handlesubmit code here
  function handleSubmit(e){
      e.preventDefault(); //to prevent browser reload

      const newTodo = {
          id: new Date().getTime(),
          text: todo.trim(),
          completed: false,
      };
      if (newTodo.text.length > 0) {
          setTodos([...todos].concat(newTodo));
          setTodo("");
      }else {
          alert("Enter Valid Task");
          setTodo("");
      }
  }
  
  // Add the deleteToDo code here
  function deleteTodo(id){
      let updatedTodos = [...todos].filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
  }
  
  // Add the toggleComplete code here
  function toggleComplete(id){
      let updatedTodos = [...todos].map((todo) => {
          if(todo.id === id){
              todo.completed = !todo.completed;
          }
          return todo;
      });
      setTodos(updatedTodos);
  }
  
  // Add the submitEdits code here

  
return(
<div id="todo-list">
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
        />
        <button type="submit">Add Todo</button>
    </form>
    {todos.map((todo)=> 
    <div className="todo" key={todo.id}>
        <div>{todo.text}</div>
        <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
    )}

</div>
);
};
export default App;
