import { AddTodoForm } from 'components/AddTodoForm'
import styles from './styles.module.css'

export const TodoList = ({ list, addTodo }) => {

    return (
        <div className={styles.main} >
            <h1> Todo List title </h1>
            <AddTodoForm classname={'form'}></AddTodoForm>
            <ul>
                {list.map((todo, index) =>
                    <li key={index}>
                        <span>{todo.todo}</span>
                        <span>{todo.status}</span>
                        <span>{todo.priority}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
