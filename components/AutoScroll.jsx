import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollingDiv({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollHeight = container.scrollHeight;

    const scrollAnimation = () => {
      container.scrollTop = 0; // Scroll to the top
      container.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    };

    const intervalId = setInterval(scrollAnimation, 3000); // Adjust the scroll interval as needed

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component is unmounted
    };
  }, []);

  return (
    <motion.div
      className="scroll-container"
      ref={containerRef}
      style={{
        height: 'full', // Adjust the height as needed
        overflow: 'hidden',
      }}
    >
      {children}
    </motion.div>
  );
}
