import React , {useState} from 'react'

function TodoForm(props) {
    const[value, setValue] = useState('');
    const[date, setDate] = useState('');
    /* allow user to type in box */
    /**const handleChange = (e) => {
        setValue(e.currentTarget.value);
        setDate(e.currentTarget.date);*/
    
    const handleSubmit = e => {
        /* this prevents the page from refreshing every time the button is pressed */
        e.preventDefault();

        /* assigns a random ID */
        props.onSubmit({
            id:Math.floor(Math.random() * 1000), 
            text:value
        })

        setValue(e.currentTarget.value);
        setDate(e.currentTarget.date)     
    };


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div>
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Enter task description" 
                    value={value} 
                    name='text' 
                    className='todo-input'
                    onChange={(e) => setValue(e.currentTarget.value)} 
                />
            </div>
            <div>
                <label>Date & Time</label>
                <input
                    type = 'text'
                    placeholder = 'Enter a date'
                    value={date}
                    className= 'date-input'
                    onChange={(e) => setDate(e.currentTarget.date)} 
                />
            </div>
            
            <button className='submit'>Submit</button>
        </form>
    )
}

export default TodoForm
