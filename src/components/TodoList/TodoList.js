import { AddTodoForm } from 'components/AddTodoForm'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EditTodoForm } from 'components'
export const TodoList = ({ list, deleteTodo, editTodo, updateTodo }) => {

    return (
        <div className={styles.main} >

            {list.map((todo, index) =>
                todo.isEditing ? (
                    <EditTodoForm classname={'form'} updateTodo={updateTodo} todo={todo} index={index} buttonText={'Edit Todo'}/>
                ) : (<div className={styles.myTodo}>
                    <p className={styles[todo.status]} onClick={(e) => console.log(e)}>{todo.todo}</p>
                    <div>
                        <FontAwesomeIcon className={styles.editTodo} icon={faPenToSquare} onClick={() => editTodo(index)} />
                        <FontAwesomeIcon className={styles.deleteTodo} icon={faTrash} onClick={() => deleteTodo(index)} />
                    </div>
                </div>)
            )
            }

        </div >
    )
}
