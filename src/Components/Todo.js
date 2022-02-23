import React from 'react'


const Todo=({text,todo,todos,setTodos})=>{

    const deleteHandler=()=>{
        console.log(todo)
        setTodos(todos.filter((el)=>el.id !== todo.id))
   
    };
    /*const CompleteHandler = () =>{
        setTodos(todos.map((item) =>{ if (item.id===todo.id){
            return{
                ...item,completed:!item.completed
            }
            return item;
        }
        } ))
    }*/

    const CompleteHandler= () =>{
        setTodos(todos.map(item =>{
            if (item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ?"completed":""}`}>{text}</li>
            <button onClick={CompleteHandler} className="complete-btn"> 
                <i className="fas fa-check">&#10004;</i>
            </button>
            <button onClick={deleteHandler}className="trash-btn">
                <i className="fas fa-trash">&#88;</i>
            </button>
        </div>
    );


};


export default Todo;