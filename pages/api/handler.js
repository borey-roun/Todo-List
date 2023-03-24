import { database } from '../../lib/firebaseServer';

export default function handler(req, res) {
  const { data } = req.body;

  const ref = database.ref('counts/');
  ref.set(data, (error) => {
    if (error) {

      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ message: 'Data saved successfully.' });
    }
  });
}
