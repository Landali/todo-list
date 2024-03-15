import styles from './styles.module.css'
import { AddTodoForm } from 'components/AddTodoForm'
import { TodoList } from 'components/TodoList'


export const Todo = ({ list, addTodo, updateTodo, deleteTodo, editTodo, clearTodos }) => {
    console.log('my list', list)
    return (
        <div className={styles.main}>
            <h1 className={styles.todoTitle}>My Todo List <button onClick={clearTodos} className={styles.deleteAllBtn}>Clear Todo List</button></h1>
            <AddTodoForm addTodo={addTodo} />
            <hr />
            <TodoList list={list} deleteTodo={deleteTodo} editTodo={editTodo} updateTodo={updateTodo} />
        </div>
    )
}