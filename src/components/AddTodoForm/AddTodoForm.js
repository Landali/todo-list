import { useState } from 'react'
import styles from './styles.module.css'
import { Button } from 'components'

export const AddTodoForm = ({ classname, addTodo }) => {
    const defaultTodo = { todo: '', status: '', priority: '', isEditing: false }
    const [newTodo, setNewTodo] = useState(defaultTodo)


    const onChangeTodoInput = (e) => {
        setNewTodo({ ...newTodo, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo(defaultTodo)
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
                className={styles.todoInput}
                onChange={onChangeTodoInput}
            ></input>
            <input
                type='text'
                placeholder='Add Status'
                value={newTodo.status}
                name={'status'}
                className={styles.todoInput}
                onChange={onChangeTodoInput}
            ></input>
            <input
                type='text'
                placeholder='Add Priority'
                value={newTodo.priority}
                name={'priority'}
                className={styles.todoInput}
                onChange={onChangeTodoInput}
            ></input>
            <Button classname={'todoSubmit'} text={'Add Todo'}/>
        </form>)
}