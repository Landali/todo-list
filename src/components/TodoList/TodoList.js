import { AddTodoForm } from 'components/AddTodoForm'
import styles from './styles.module.css'

import { EditTodoForm, TodoItem } from 'components'
export const TodoList = ({ list, deleteTodo, editTodo, updateTodo }) => {

    return (
        <div className={styles.main} >

            {list.map((todo, index) =>
                todo.isEditing ? (
                    <EditTodoForm classname={'form'} updateTodo={updateTodo} todo={todo} index={index} buttonText={'Edit Todo'} />
                ) : (<TodoItem status={todo.status} todo={todo.todo} priority={todo.priority} editTodo={editTodo} deleteTodo={deleteTodo} index={index} />)
            )
            }

        </div >
    )
}
