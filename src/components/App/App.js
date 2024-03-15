import styles from './styles.module.css'
import { useTodoListContext } from 'providers/TodoListProvider';
import { Todo } from 'components';


export const App = () => {

  const { todoList, addTodo, updateTodo, removeTodo } = useTodoListContext();

  console.log('My initial context state: ', {
    todoList
  })

  return (
    <div className={styles.main} >
      <Todo list={todoList} addTodo={addTodo} updateTodo={updateTodo} deleteTodo={removeTodo}/>

    </div>
  );
}
