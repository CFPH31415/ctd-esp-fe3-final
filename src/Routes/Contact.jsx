import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Maneja los cambios de los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de datos
    if (formData.name.length < 5 || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor verifique su información nuevamente');
      setSuccess('');
    } else {
      setError('');
      setSuccess(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      console.log(formData);  // En un escenario real, aquí se enviaría la información a un servidor
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default Contact;
