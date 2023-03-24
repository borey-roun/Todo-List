import { useState, useEffect } from 'react';
import Head from 'next/head';
import { addTodoItem, getAllTodoItems, updateTodoItem, deleteTodoItem } from '../utils/firebase';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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

    await addTodoItem(newTodoText);
    const todos = await getAllTodoItems();
    setTodos(todos);
    setNewTodoText('');
  }

  async function handleTodoItemToggle(todoItem) {
    const updates = { completed: !todoItem.completed };
    await updateTodoItem(todoItem.id, updates);
    const todos = await getAllTodoItems();
    setTodos(todos);
  }

  async function handleTodoItemDelete(todoItem) {
    await deleteTodoItem(todoItem.id);
    const todos = await getAllTodoItems();
    setTodos(todos);
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
            <li key={todoItem.id}>
              <input type="checkbox" checked={todoItem.completed} onChange={() => handleTodoItemToggle(todoItem)} />
              <span>{todoItem.text}</span>
              <button onClick={() => handleTodoItemDelete(todoItem)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
