import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'


function TodoList() {

    /* array to hold todo items */
    const[todos, setTodos] = useState([]);

    /* This function is used to add elements to the array 'todos' */
    const addTodo = todo => {
        /* makes sure user inputs text */
        if(!todo.text) {
            alert('Please enter a task')
            return;
        } 
        /* This loop is used to validate there are no duplicated items */
        for(var i = 0; i < todos.length; i++){
            var text1 = todos[i].text
            var text2 = todo.text
            if(text1 === text2){
                alert('Duplicate Item Detected. Try again') //displays a warning message
                return //breaks loop
            }
        }
        //adds the parameter 'todo' into the array
        const newTodos= [...todos, todo];
        setTodos(newTodos);
    };

    /* Function for editing todo elements */
    const editTodo = (todoId, newValue) => {
          /* makes sure user inputs text */
          if(!newValue.text) {
            return;
        } 

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    /* This function takes an id value as input and filters through the array to remove an element */
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    //Returns
    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <TodoItem todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo}/>
        </div>
    )
}

export default TodoList