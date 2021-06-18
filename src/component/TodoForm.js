import React , {useState} from 'react'

function TodoForm(props) {
    const[input, setInput] = useState('');

    /* allow user to type in box */
    const handleChange = e => {
        setInput(e.target.value);
    };
    
    const handleSubmit = e => {
        /* this prevents the page from refreshing every time the button is pressed */
        e.preventDefault();

        /* assigns a random ID */
        props.onSubmit({
            id:Math.floor(Math.random() * 1000), 
            text:input
        })

        setInput('');
        
    };


    return (
        <form classNme="todo-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="add to list" 
            value={input} 
            name='text' 
            className='todo-input'
            onChange={handleChange} 
            />
            <button className="todo-button">Add toDo</button>
        </form>
    )
}

export default TodoForm
