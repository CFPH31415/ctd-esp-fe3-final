import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación
    if (formData.name.length < 5 || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor verifique su información nuevamente');
      setSuccess('');
    } else {
      setError('');
      setSuccess(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      console.log(formData);  // Aquí puedes enviar los datos a tu servidor si es necesario
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre Completo"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Form;
