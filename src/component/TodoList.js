import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

    const[todos, setTodos] = useState([]);

    const addTodo = todo => {
        /* makes sure user inputs text */
        if(!todo.text) {
            return;
        } 

        const newTodos= [todo, ...todos];
        setTodos(newTodos);
    };

    const editTodo = (todoId, newValue) => {
          /* makes sure user inputs text */
          if(!newValue.text) {
            return;
        } 

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

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

    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo}/>
        </div>
    )
}

export default TodoList