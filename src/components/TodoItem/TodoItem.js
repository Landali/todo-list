import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({ status, todo, priority, editTodo, deleteTodo, index, labelOnClick }) => {


    return (
        <div className={styles.main}>
            <p className={styles[todo.status]} onClick={labelOnClick}>{todo} / {status} / {priority}</p>
            <div>
                <FontAwesomeIcon className={styles.editTodo} icon={faPenToSquare} onClick={() => editTodo(index)} />
                <FontAwesomeIcon className={styles.deleteTodo} icon={faTrash} onClick={() => deleteTodo(index)} />
            </div>
        </div>
    )
}