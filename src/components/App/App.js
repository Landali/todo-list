import styles from './styles.module.css'
import { useTodoListContext } from 'providers/TodoListProvider';
import { TodoList } from 'components';


export const App = () => {

  const { todoList, addTodo } = useTodoListContext();

  console.log('My initial context state: ', {
    todoList
  })

  return (
    <div className={styles.main} >
      <TodoList list={todoList} addTodo={addTodo}>
      </TodoList>
    </div>
  );
}
