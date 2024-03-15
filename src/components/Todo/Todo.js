import styles from './styles.module.css'
import { Button, TodoList, AddTodoForm } from 'components'



export const Todo = ({ list, addTodo, updateTodo, deleteTodo, editTodo, clearTodos }) => {

    return (
        <div className={styles.main}>
            <h1 className={styles.todoTitle}>My Todo List <Button classname={'deleteAllBtn'} text={'Clear Todo List'} onClick={clearTodos} /></h1>
            <AddTodoForm addTodo={addTodo} />
            <hr />
            <TodoList list={list} deleteTodo={deleteTodo} editTodo={editTodo} updateTodo={updateTodo} />
        </div>
    )
}