import styles from './styles.module.css'
import { useTodoListContext } from 'providers/TodoListProvider';
import { TodoList } from 'components';


export const App = () => {

  const { todoList } = useTodoListContext();

  console.log('My initial context state: ', {
    todoList
  })

  return (
    <div className={styles.main} >
      <TodoList list={todoList}>
      </TodoList>
    </div>
  );
}
