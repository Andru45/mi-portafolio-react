import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contacto = () => {
  const form = useRef();
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const formData = new FormData(form.current);
    const nombre = formData.get('nombre').trim();
    const correo = formData.get('correo').trim();
    const mensaje = formData.get('mensaje').trim();

    let erroresTemp = {};

    if (nombre.length < 3) {
      erroresTemp.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      erroresTemp.correo = 'El correo no es válido.';
    }

    if (mensaje.length < 10) {
      erroresTemp.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrores(erroresTemp);

    return Object.keys(erroresTemp).length === 0;
  };

  const enviarEmail = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    emailjs
      .sendForm(
        'service_ab0j5pr', // Reemplaza con tu Service ID
        'template_t6ueodl', // Reemplaza con tu Template ID
        form.current,
        'v9nwSeX3qG6kR1KFV' // Reemplaza con tu User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMensaje('¡Mensaje enviado con éxito!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMensaje('Hubo un problema al enviar el mensaje. Inténtalo de nuevo.');
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: 'center', marginTop: '40px' }}
    >
      <h2>Contacto</h2>
      <p>¡Envíame un mensaje! Estoy encantado de escuchar tus ideas.</p>
      <motion.form
        ref={form}
        onSubmit={enviarEmail}
        style={{ maxWidth: '400px', margin: '0 auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          />
          {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          />
          {errores.correo && <p style={{ color: 'red' }}>{errores.correo}</p>}
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              height: '100px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          ></textarea>
          {errores.mensaje && <p style={{ color: 'red' }}>{errores.mensaje}</p>}
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: '#3C4048',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Enviar
        </motion.button>
      </motion.form>
      {mensaje && <p style={{ marginTop: '15px', color: mensaje.includes('éxito') ? 'green' : 'red' }}>{mensaje}</p>}
    </motion.section>
  );
};

export default Contacto;
