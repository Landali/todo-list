import styles from './styles.module.css'

export const TodoList = ({ list }) => {
    return (
        <div className={styles.main} >
            <h1> Todo List title </h1>
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
