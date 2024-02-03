// Import Components

// Import React

// Import Framer-Motion
import { motion } from "framer-motion";

// Import CSS

// Export ComponentTransitionFade Function
export default function ComponentTransitionFade( { children , componentIdx } ) {
    const animations = {
        initial: { opacity: 0 , x: 0 },
        animate: { opacity: 1 , x: 0 },
        exit: { opacity: 0 , x: 0 }
    }

    // Return Div for ComponentTransitionFade Container
    return (
        <motion.div
            variants={animations}
            key={componentIdx}
            custom={componentIdx}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={ { 
                duration: .25 , 
                ease: "linear", 
                type: "tween" , 
            } }
        >
            { children }
        </motion.div>
    );
}