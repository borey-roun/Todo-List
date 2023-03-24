import { database } from '../../../firebase/initFirebase';

const todosRef = database.ref('todos');

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { text, completed, createdAt } = req.body;
    const updatedTodo = {
      id: id,
      text: text,
      completed : completed,
      createdAt: createdAt,
    };
    await todosRef.child(id).update(updatedTodo);
    res.status(200).json({ success: true });
  } else if (req.method === 'DELETE') {
    await todosRef.child(id).remove();
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
