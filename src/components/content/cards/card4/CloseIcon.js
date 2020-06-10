import React from 'react'
import {motion} from 'framer-motion'

function CloseIcon(props) {
  const svgVariants = {
    opened: {
      rotate: 45,
      scale: 1.2,
     
    },
    closed: {
      rotate: 0,
      scale: 1.2,
    }
  }
  return (
    <div>
      <motion.svg
        initial={!props.isOpen ? "opened" : "closed"}
        variants={svgVariants}
        animate={props.isOpen ? "opened" : "closed"}
        
        className="svg-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
      />
      </motion.svg>
    </div>
  )
}

export default CloseIcon

//onClick={() => props.openFAQ(props.id)}