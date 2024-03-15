import { useState } from 'react'
import styles from './styles.module.css'

export const AddTodoForm = ({ classname }) => {

    const [newTodo, setNewTodo] = useState({ todo: '', status: '', priority: '' })


    const onChangeTodoInput = (e) => {
        console.log('event on change', e.target.id);
       // setTodoItem({ ...todoItem, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       // console.log('Todo to submit: ', todoItem)
        // addTodo(todoItem)
    }

    return (
        <form 
        className={`${styles[classname]} ${styles.main}}`}
        onSubmit={handleSubmit}
        >
            <input
                type='text'
                placeholder='Add Todo'
                value={newTodo.todo}
                name={'todo'}
                className={styles['todo-input']}
                onChange={onChangeTodoInput}
            ></input>
            <input
                type='text'
                placeholder='Add Status'
                value={newTodo.status}
                name={'status'}
                className={styles['todo-input']}
                onChange={onChangeTodoInput}
            ></input>
            <input
                type='text'
                placeholder='Add Priority'
                value={newTodo.priority}
                name={'priority'}
                className={styles['todo-input']}
                onChange={onChangeTodoInput}
            ></input>
            <button
                className='todo-submit'
            >Add Todo</button>
        </form>)
}