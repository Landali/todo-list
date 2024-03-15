import { AddTodoForm } from 'components/AddTodoForm'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoList = ({ list, updateTodo, deleteTodo }) => {

    return (
        <div className={styles.main} >
            <ul>
                {list.map((todo, index) =>
                    <div className={styles.myTodo}>
                        <p className={styles[todo.status]} onClick={(e) => console.log(e)}>{todo.todo}</p>
                        <div>
                            <FontAwesomeIcon className={styles.editTodo} icon={faPenToSquare} onClick={() => deleteTodo(index)} />
                            <FontAwesomeIcon className={styles.deleteTodo} icon={faTrash} onClick={() => deleteTodo(index)} />
                        </div>
                    </div>
                )
                }
            </ul >
        </div >
    )
}
