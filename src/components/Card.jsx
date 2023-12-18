import PropTypes from 'prop-types';
import { string } from "prop-types";
import { twMerge } from "tailwind-merge";
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Card = ({className, children, ...props}) => {
  Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: string
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-1.5, 1.5],
    ["30deg", "-30deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-1.5, 1.5],
    ["-30deg", "30deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      className={twMerge('rounded-lg bg-white/40 card', className)} {...props}
    >
      {children}
    </motion.div>
  )
}

const CardBody = ({className, children, ...props}) => {
  CardBody.propTypes = {
    children: PropTypes.node.isRequired,
    className: string
  }
  return (
    <div
      style={{
        transform: 'translateZ(75px)',
        transformStyle: 'preserve-3d',
      }}
      className={twMerge('flex shadow-xl card-body', className)} {...props}
      >
        {children}
      </div>
  )
}

export {Card, CardBody}
