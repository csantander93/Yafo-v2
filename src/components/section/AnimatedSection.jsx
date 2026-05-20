// components/AnimatedSection.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, id, className = '' }) => {
const [ref, inView] = useInView({
  threshold: 0.1,
  triggerOnce: true,
  rootMargin: '-50px 0px' // Añade un margen negativo para activar la animación antes
});

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;