const { createContext, useState, useContext } = require("react");

const TodoContext = createContext();

const defaultTodoState = [
    { todo: 'My first todo', status: 'pending', priority: 'low', isEditing: false },
    { todo: 'My first todo 2', status: 'pending', priority: 'high', isEditing: false },
]


const sortTodos = (todos, sortby) => {
    let sortedTodos = todos || [];
    const order = {
        low: ['low', 'medium', 'high'],
        high: ['high', 'medium', 'low']
    }
    if (sortedTodos.length > 1) {
        sortedTodos = todos.sort((a, b) => order[sortby].indexOf(a.priority) - order[sortby].indexOf(b.priority))
        return sortedTodos
    }
    return sortedTodos

}

const TodoListProvider = ({ children }) => {

    let mytodoList = localStorage.getItem('todoList')
    mytodoList = JSON.parse(mytodoList)
    mytodoList = sortTodos(mytodoList,'high')

    const [todoList, setTodoList] = useState(mytodoList || defaultTodoState)

    const getNumberTodos = () => todoList.length

    const addTodo = (newTodo) => {
        const newSortedTodo = sortTodos([...todoList, newTodo], 'high') 
        setTodoList(newSortedTodo);
        localStorage.setItem('todoList', JSON.stringify(newSortedTodo))
    }

    const removeTodo = (todo) => {
        const newTodoList = todoList.filter((_, index) => index !== todo)
        setTodoList(newTodoList)
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
    }

    const updateTodo = (todo, todoIndex) => {
        const newTodoList = todoList.map((item, index) => {
            if (index === todoIndex) {
                item = todo
            }
            return item;
        })
        const sortedUpdatedTodo = sortTodos(newTodoList, 'high')
        setTodoList(sortedUpdatedTodo)
        localStorage.setItem('todoList', JSON.stringify(sortedUpdatedTodo))
    }

    const editTodo = (todo) => {
     
        const newTodoList = todoList.map((item, index) => {
            if (index === todo) {
                item.isEditing = !item.isEditing
            }
            return item;
        })
        setTodoList(newTodoList)
    }

    const clearTodos = () => {
        setTodoList([])
        localStorage.removeItem('todoList')
    }



    const contextValue = {
        todoList,
        getNumberTodos,
        addTodo,
        updateTodo,
        removeTodo,
        clearTodos,
        editTodo
    }

    return (<TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>)
}

export const useTodoListContext = () => useContext(TodoContext);

export default TodoListProvider