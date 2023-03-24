import { database } from "../firebase/initFirebase";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    const todosRef = database.ref("todos");
    todosRef.on("value", (snapshot) => {
      const dataSnapshot = snapshot.val();
      var data = Object.keys(dataSnapshot).map((key) => ({
        id: key,
        ...dataSnapshot[key],
      }));
      const valuesArray = Object.values(data);
      setTodos(valuesArray);
    });

    return () => {
      todosRef.off("value");
    };
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

    const response = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodoText,
        completed: false,
        createdAt: new Date().toISOString(),
      }),
    });
    setNewTodoText("");
  }

  async function handleTodoItemDelete(todoItemId) {
    try {
      const res = await fetch(`/api/todo/${todoItemId}`, { method: "DELETE" });
      console.log(res);
      // setTodos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  }

  function handleTodoItemEditStart(todoItemId) {
    setEditingItemId(todoItemId);
  }

  async function handleTodoItemEditEnd(todoItem, newText) {
    try {
      await fetch(`/api/todo/${todoItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: newText,
          completed: todoItem.completed,
          createdAt: todoItem.createdAt,
        }),
      });
    } catch (error) {
      console.error(error);
    }
    setEditingItemId(null);
  }

  async function handleTodoItemToggle(todoItem) {
    try {
      await fetch(`/api/todo/${todoItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: todoItem.text,
          completed: !todoItem.completed,
          createdAt: todoItem.createdAt,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Filter todos based on search term
  const filteredTodos =
    todos.length > 0
      ? todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  return (
    <div>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Todo List</h1>

        <form onSubmit={handleAddTodoSubmit}>
          <input
            type="text"
            value={newTodoText}
            onChange={(event) => setNewTodoText(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <input
          type="text"
          placeholder="Search todos"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <ul>
          {filteredTodos.map((todoItem) => (
            <li
              key={todoItem.id}
              onMouseEnter={(e) =>
                e.target.lastElementChild &&
                (e.target.lastElementChild.style.display = "inline")
              }
              onMouseLeave={(e) =>
                e.target.lastElementChild &&
                (e.target.lastElementChild.style.display = "none")
              }
            >
              {editingItemId === todoItem.id ? (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleTodoItemEditEnd(
                      todoItem,
                      event.target.todoInput.value
                    );
                  }}
                >
                  <input
                    name="todoInput"
                    type="text"
                    defaultValue={todoItem.text}
                  />
                  <button type="submit">Save</button>
                </form>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: todoItem.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {todoItem.text}
                  </span>
                  <button onClick={() => handleTodoItemEditStart(todoItem.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleTodoItemDelete(todoItem.id)}>
                    Remove
                  </button>
                  <button onClick={() => handleTodoItemToggle(todoItem)}>
                    {todoItem.completed
                      ? "Mark as Incomplete"
                      : "Mark as Complete"}
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
