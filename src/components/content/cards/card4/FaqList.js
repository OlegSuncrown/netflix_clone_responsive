import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import CloseIcon from './CloseIcon'
function FaqList({item, openFAQ}) {

  const listVariants = {
    opened: {
      opacity: 1,
      height: 'auto',
      display: 'block',
    },
    closed: {
      opacity: 0,
      height: '0px',
      display: 'none',
    }
  }
  const bottomBorderVariants = {
    opened: {
      borderBottom: '2px solid #000',
    },
    closed: {
      borderBottom: '6px solid #000',
    }
  }
  return (
    <div> 
      <motion.div 
        onClick={() => openFAQ(item.id)}
        initial={!item.isOpened ? "opened" : "closed"}
        variants={bottomBorderVariants}
        animate={item.isOpened ? "opened" : "closed"}
        className="faq-list__title p-2 py-3 px-5 w-100 h-100 d-inline-flex justify-content-between align-items-center">
          <h3 className="text-left p-0 m-0">{item.title}</h3>
          <CloseIcon openFAQ={openFAQ} id={item.id} isOpen={item.isOpened}/>
      </motion.div>
  
      <AnimatePresence>
        {item.isOpened && (
        <motion.div className="faq-list__content p-2 py-3 px-5 w-100 h-100 d-inline-flex  align-items-center"
          variants={listVariants}
          animate={item.isOpened ? "opened" : "closed"}
          exit={{height: 0}}>
          
          <h3 className="text-left ">
            {item.text1}
            <br/>
            <br/>
            {item.text2}
          </h3>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FaqList
