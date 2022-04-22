
import React from 'react';

const Form = ({setInputText,inputText,setTodos,todos,status,setStatus}) =>{
    const inputTextHandler = (event) =>{
        console.log(event.target.value);
        setInputText(event.target.value);

    };

    const submitHandler=(event)=>{
        event.preventDefault();
        setTodos([
            ...todos,{text: inputText, completed : false,
            id: Math.random() * 1000},

        ]);
        setInputText("");

    };

    const statusHandler = (e) => {
        setStatus(e.target.value);

    }
    
    return(
        <form >
            <input value={inputText} type="text" onChange={inputTextHandler} className="todo-input"/>
            <button className="todo-button" type="submit"
            onClick={submitHandler}>
            <i className="fas fa-plus-square">+</i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option> 
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>

                </select>  
            </div>
        </form>
    );
}




export default Form;