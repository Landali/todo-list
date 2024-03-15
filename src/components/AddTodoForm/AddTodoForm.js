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