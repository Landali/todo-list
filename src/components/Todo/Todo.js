import styles from './styles.module.css'
import { AddTodoForm } from 'components/AddTodoForm'
import { TodoList } from 'components/TodoList'


export const Todo = ({ list, addTodo }) => {
    console.log('my list', list)
    return (
        <div className={styles.main}>
            <h1 className={styles.todoTitle}>My Todo List</h1>
            <AddTodoForm></AddTodoForm>
            <TodoList list={list} addTodo={addTodo}></TodoList>
        </div>
    )
}