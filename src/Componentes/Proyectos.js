import { motion } from "framer-motion";

function Proyectos() {
  return (
    <section style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Mis Proyectos</h2>
      <motion.ul 
        style={{ listStyle: "none", padding: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.li whileHover={{ scale: 1.1 }}>🚀 Proyecto 1: Landing Page para negocios</motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>🛠 Proyecto 2: Aplicación de tareas</motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>🎮 Proyecto 3: Juego básico con JavaScript</motion.li>
      </motion.ul>
    </section>
  );
}

export default Proyectos;
