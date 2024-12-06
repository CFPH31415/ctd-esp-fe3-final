import { useEffect, useState } from 'react';
import Card from "../Components/Card";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {users.map(user => (
          <Card key={user.id} {...user} />
        ))} 
      </div>
    </main>
  );
};


export default Home;
