import styles from './styles.module.css'
import { useTodoListContext } from 'providers/TodoListProvider';
import { Todo } from 'components';


export const App = () => {

  const { todoList, addTodo, updateTodo, removeTodo, editTodo, clearTodos } = useTodoListContext();

  console.log('My initial context state: ', {
    todoList
  })

  return (
    <div className={styles.main} >
      <Todo clearTodos={clearTodos} list={todoList} addTodo={addTodo} updateTodo={updateTodo} deleteTodo={removeTodo} editTodo={editTodo} />

    </div>
  );
}
