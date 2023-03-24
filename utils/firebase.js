import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  });

   const database = firebase.database(app);

async function addTodoItem(todoText) {
  const todosRef = firebase.database().ref('todos');
  const newTodoRef = todosRef.push();
  const newTodo = {
    text: todoText,
    completed: false,
    createdAt: Date.now(),
  };
  
  await newTodoRef.set(newTodo);
}

async function getAllTodoItems() {
  const todosRef = firebase.database().ref('todos');
  const snapshot = await todosRef.once('value');
  const todos = snapshot.val();
  if (!todos) {
    return [];
  }
  return Object.keys(todos).map((key) => ({
    id: key,
    ...todos[key],
  }));
}

async function updateTodoItem(id, updates) {
  const todoRef = firebase.database().ref(`todos/${id}`);
  await todoRef.update(updates);
}

async function deleteTodoItem(id) {
  const todoRef = firebase.database().ref(`todos/${id}`);
  await todoRef.remove();
}

export {database, addTodoItem, getAllTodoItems, updateTodoItem, deleteTodoItem };