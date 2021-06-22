import React, {useState} from 'react';
import TodoForm from './TodoForm';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { CheckBox } from '@material-ui/icons';


function Todo({todos, completeTodo, removeTodo, editTodo, setCompleted}) {
    const [edit, setEdit] = useState({
        id:null,
        value:'',
        date: '',
        isComplete: false
    });

    const submitEdit = (props) => {
        editTodo(edit.id, props);
        setEdit({
            id:null,
            value: '',
            date: '',
            isComplete: false
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }
    /* The return function formats what each todo item will look like once it is submitted */
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                <h3 style={{color: 'white'}}>
                    <CheckBox />
                    {todo.text}
                </h3>
                <p style={{color: 'white'}}>
                    {todo.date}
                </p>
            </div>
            <div className='icons' style = {{color: 'white'}}>
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
