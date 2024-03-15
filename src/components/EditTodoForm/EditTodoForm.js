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

export const EditTodoForm = ({ classname, updateTodo, todo, index, buttonText }) => {
    const [newTodo, setNewTodo] = useState(todo)


    const onChangeTodoInput = (e) => {
        setNewTodo({ ...newTodo, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTodo({ ...newTodo, isEditing: false }, index)
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
            <Button classname={'todoSubmit'} text={buttonText} />
        </form>)
}