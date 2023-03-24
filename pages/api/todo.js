import { database } from '../../firebase/initFirebase';
import { v4 as uuidv4 } from 'uuid';

const todosRef = database.ref('todos');
export default async function handler(req, res) {
  const { text, completed, createdAt } = req.body;
  const uuid = uuidv4();
  const newTodosRef = todosRef.child(uuid);
  const newTodo = {
    id: uuid,
    text: text,
    completed : completed,
    createdAt: createdAt,
  };
  await newTodosRef.set(newTodo);
  res.status(200).json({ success: true });
}