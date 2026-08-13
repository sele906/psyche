import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch((err) => console.error(err));
  }, []);

  return <div>API status: {status}</div>;
}

export default App;
