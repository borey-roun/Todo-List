import { database } from "../firebase/initFirebase";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  useEffect(() => {
    const todosRef = database.ref("todos");
    todosRef.on("value", (snapshot) => {
      if (snapshot && snapshot.val()) {
        const dataSnapshot = snapshot.val();
        var data = Object.keys(dataSnapshot).map((key) => ({
          id: key,
          ...dataSnapshot[key],
        }));
        setTodos(Object.values(data));
      } else {
        setTodos([]);
      }
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
      window.alert(
        `There should be no duplicate item in the list ! "${newTodoText}" already have in the list !`
      );
      return;
    }

    await fetch("/api/todo", {
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
    await fetch(`/api/todo/${todoItemId}`, { method: "DELETE" });
  }

  function handleTodoItemEditStart(todoItemId) {
    setEditingItemId(todoItemId);
  }

  async function handleTodoItemEditEnd(todoItem, newText) {
    await fetch(`/api/todo/${todoItem.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: newText,
        completed: todoItem.completed,
        createdAt: todoItem.createdAt,
      }),
    });
    setEditingItemId(null);
  }

  async function handleTodoItemToggle(todoItem) {
    await fetch(`/api/todo/${todoItem.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: todoItem.text,
        completed: !todoItem.completed,
        createdAt: todoItem.createdAt,
      }),
    });
  }

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
      </Head>
      <main>
        <h1>Todo List</h1>
        <form onSubmit={handleAddTodoSubmit} style={{ marginBottom: "10px" }}>
          <label htmlFor="newItem">New Item: </label>
          <input
            type="text"
            value={newTodoText}
            onChange={(event) => setNewTodoText(event.target.value)}
          />
        </form>

        <label htmlFor="searchQuery">Search Items: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        {filteredTodos.length === 0 && searchTerm.length != 0 ? (
          <p>No result. Create a new one instead!</p>
        ) : (
          <ul>
            {filteredTodos.map((todoItem) => (
              <li
                key={todoItem.id}
                onMouseEnter={() => setHoveredItemId(todoItem.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                style={{ margin: "10px" }}
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
                      {todoItem.text}{" "}
                    </span>
                    {hoveredItemId === todoItem.id && (
                      <>
                        <button
                          onClick={() => handleTodoItemEditStart(todoItem.id)}
                          style={{ marginLeft: "10px" }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleTodoItemDelete(todoItem.id)}
                          style={{ marginLeft: "10px" }}
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => handleTodoItemToggle(todoItem)}
                          style={{ marginLeft: "10px" }}
                        >
                          {todoItem.completed
                            ? "Mark as Incomplete"
                            : "Mark as Complete"}
                        </button>
                      </>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
