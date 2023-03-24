import { useEffect, useState } from 'react';
import { database } from '../lib/firebaseClient';

export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ref = database.ref('count');
    ref.on('value', (snapshot) => {
      setData(snapshot.val());
    });

    return () => {
      ref.off();
    };
  }, []);

  const increaseCount = async () => {
    const registerCount = () => fetch(`/api/handler`)
    registerCount()
}


  return(
    <div style={{ margin: '5px 0' }}>
        <h1>{JSON.stringify(data)}</h1>
    <h1 onClick={increaseCount}>increaseCount</h1>
         
            
        </div>
  )
  
}
