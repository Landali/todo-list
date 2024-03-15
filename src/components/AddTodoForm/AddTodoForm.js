import { useState } from 'react'
import styles from './styles.module.css'
import { Button, Input } from 'components'


const formInputs = [
    {
        classname: 'todoInput',
        type: 'text',
        placeholder: 'Add Todo',
        name: 'todo'
    },
    {
        classname: 'todoInput',
        type: 'text',
        placeholder: 'Add Status',
        name: 'status'
    },
    {
        classname: 'todoInput',
        type: 'text',
        placeholder: 'Add Priority',
        name: 'priority'
    }
]

const validateStatus = (value) => {
    const regex = /(?:pending\b|complete\b)/g
    if (!regex.test(value)) {
        return false
    }
    return true
}

const validatePriority = (value) => {
    const regex = /(?:high\b|low\b|medium\b)/g
    if (!regex.test(value)) {
        return false
    }
    return true
}

export const AddTodoForm = ({ classname, addTodo }) => {
    const defaultTodo = { todo: '', status: '', priority: '', isEditing: false }
    const [newTodo, setNewTodo] = useState(defaultTodo)
    const [error, setError] = useState('')

    const onChangeTodoInput = (e) => {
        if (e.target.name === 'todo') {
            setNewTodo({ ...newTodo, [e.target.name]: e.target.value })
        } else {
            setNewTodo({ ...newTodo, [e.target.name]: e.target.value.toLowerCase() })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validPriority = validatePriority(newTodo.priority)
        const validStatus = validateStatus(newTodo.status)
        if (!validPriority || !validStatus) {
            setError(!validPriority ? 'Priority values allowed: low/medium/high' : 'Status Values allowed: pending/completed')
        } else {
            addTodo(newTodo)
            setNewTodo(defaultTodo)
        }
    }

    return (
        <form
            className={`${styles[classname]} ${styles.main}}`}
            onSubmit={handleSubmit}
        >
            <h4 className={styles.error}>{error}</h4>

            {formInputs.map((input) =>
                <Input
                    name={input.name}
                    placeholder={input.placeholder}
                    classname={input.classname}
                    type={input}
                    value={newTodo[input.name]}
                    onChange={onChangeTodoInput}
                />
            )}
            <Button classname={'todoSubmit'} text={'Add Todo'} />
        </form>)
}