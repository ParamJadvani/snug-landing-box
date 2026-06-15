import { motion } from "framer-motion";

const FloatIn = ({
  children,
  delay = 0,
  float = true,
  amount = 0.2,
  style,
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        delay,
      }}
      style={style}
      {...rest}
    >
      {float ? (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default FloatIn;