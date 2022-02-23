import React,{useState,useEffect} from 'react';
import './App.css';
import Form from "./Components/Form.js"
import TodoList from "./Components/TodoList.js";

function App() {


  const [inputText,setInputText]=useState("");
  const [todos,setTodos]= useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

  
  //UseEffect
  useEffect(()=>{
    FilterHandler();
    saveLocalTodos();
  }, [todos, status]);


  const FilterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;

      default:
        setFilteredTodos(todos);
        break; 
    }
  };

//save to local

const saveLocalTodos = () => {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos",JSON.stringify([]));
  }else {
    localStorage.setItem("todo",JSON.stringify(todos));
  }
};

  return (
    <div className="App">
      <header className="App-header">
       <h1>ToDo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText = {setInputText}
      status={status} setStatus={setStatus}/>
      <TodoList filteredTodos={filteredTodos}todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

