import React, {useState} from 'react'
import TodoForm from './TodoForm'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit'

function Todo({todos, completeTodo, removeTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id:null,
        value:'',
        date: '',
    });

    const submitEdit = value => {
        editTodo(edit.id, value);
        setEdit({
            id:null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                <h3>{todo.text}</h3>
                <p>{todo.date}</p>
            </div>
            <div className='icons'>
                <HighlightOffIcon 
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                />
                <EditIcon 
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'/>
            </div>        
        </div>
    ));
}

export default Todo
