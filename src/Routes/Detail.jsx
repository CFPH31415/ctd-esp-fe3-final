import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <img 
        src="/images/doctor.jpg" 
        alt="Doctor" 
        className="doctor-image" 
      />
      <h1>{user.name}</h1>
      <div className="info-container">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p>
          <strong>Website: </strong> 
          <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Detail;