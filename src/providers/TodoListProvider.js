const { createContext, useState, useContext } = require("react");

const TodoContext = createContext();

const defaultTodoState = [
    { todo: 'My first todo', status: 'pending', priority: 'low', isEditing: false },
    { todo: 'My first todo 2', status: 'pending', priority: 'high', isEditing: false },
]

const TodoListProvider = ({ children }) => {

    let mytodoList = localStorage.getItem('todoList')
    mytodoList = JSON.parse(mytodoList)

    const [todoList, setTodoList] = useState(mytodoList || defaultTodoState)

    const getNumberTodos = () => todoList.length

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
        localStorage.setItem('todoList', JSON.stringify([...todoList, newTodo]))
    }

    const removeTodo = (todo) => {
        console.log('deleting todo')
        const newTodoList = todoList.filter((_, index) => index !== todo)
        console.log('Todo deleted: ', newTodoList)
        setTodoList(newTodoList)
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
    }

    const updateTodo = (todo) => {
        const newTodoList = todoList.map((item, index) => {
            if (index === todo.id) {
                item.priority = todo.priority
            }
            return item;
        })
        setTodoList(newTodoList)
    }

    const clearTodos = () => {
        setTodoList([])
    }

    const sortTodos = (sortby) => {
        let sortedTodos = [];
        const order = {
            low: ['low', 'medium', 'high'],
            high: ['high', 'medium', 'low']
        }
        if (todoList.length > 1) {
            sortedTodos = todoList.sort((a, b) => order[sortby].indexOf(a.priority) - order[sortby].indexOf(b.priority))
            setTodoList(sortedTodos)
        }
    }

    const contextValue = {
        todoList,
        getNumberTodos,
        addTodo,
        updateTodo,
        removeTodo,
        clearTodos,
        sortTodos
    }

    return (<TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>)
}

export const useTodoListContext = () => useContext(TodoContext);

export default TodoListProvider