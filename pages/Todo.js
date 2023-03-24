import { useState, useEffect } from 'react';
import Head from 'next/head';
import { addTodoItem, getAllTodoItems, updateTodoItem, deleteTodoItem } from '../utils/firebase';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    async function fetchTodos() {
      const todos = await getAllTodoItems();
      console.log(todos);
      setTodos(todos);
    }

    fetchTodos();
  }, []);

  async function handleAddTodoSubmit(event) {
    event.preventDefault();
    if (!newTodoText.trim()) return;

    // Check if the new todo item already exists in the list
    const existingTodo = todos.find((todo) => todo.text === newTodoText);
    if (existingTodo) {
      console.warn(`Duplicate item "${newTodoText}" not added to todo list`);
      return;
    }

    await addTodoItem(newTodoText);

    // Fetch the updated todo list
    const updatedTodos = await getAllTodoItems();
    setTodos(updatedTodos);

    setNewTodoText('');
  }

  async function handleTodoItemToggle(todoItem) {
    const updates = { completed: !todoItem.completed };
    await updateTodoItem(todoItem.id, updates);

    // Fetch the updated todo list
    const updatedTodos = await getAllTodoItems();
    setTodos(updatedTodos);
  }

  async function handleTodoItemDelete(todoItemId) {
    await deleteTodoItem(todoItemId);

    // Fetch the updated todo list
    const updatedTodos = await getAllTodoItems();
    setTodos(updatedTodos);
  }

  function handleTodoItemEditStart(todoItemId) {
    setEditingItemId(todoItemId);
  }

  async function handleTodoItemEditEnd(todoItem, newTodoText) {
    const updates = { text: newTodoText };
    await updateTodoItem(todoItem.id, updates);

    // Fetch the updated todo list
    const updatedTodos = await getAllTodoItems();
    setTodos(updatedTodos);

    setEditingItemId(null);
  }

  // Filter todos based on search term
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Todo List</h1>

        <form onSubmit={handleAddTodoSubmit}>
          <input type="text" value={newTodoText} onChange={(event) => setNewTodoText(event.target.value)} />
          <button type="submit">Add</button>
        </form>

        <input type="text" placeholder="Search todos" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />

        <ul>
          {filteredTodos.map((todoItem) => (
            <li key={todoItem.id} onMouseEnter={(e) => e.target.lastElementChild && (e.target.lastElementChild.style.display = 'inline')} onMouseLeave={(e) => e.target.lastElementChild && (e.target.lastElementChild.style.display = 'none')}>
              {editingItemId === todoItem.id ? (
                <form onSubmit={(event) => {
                  event.preventDefault();
                  handleTodoItemEditEnd(todoItem, event.target.todoInput.value);
                }}>
                  <input name="todoInput" type="text" defaultValue={todoItem.text} />
                  <button type="submit">Save</button>
                </form>
              ) : (
                <>
                  <span style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}>{todoItem.text}</span>
                  <button onClick={() => handleTodoItemEditStart(todoItem.id)} >Edit</button>
                  <button onClick={() => handleTodoItemDelete(todoItem.id)} >Remove</button>
                  <button onClick={() => handleTodoItemToggle(todoItem)}>{todoItem.completed ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
