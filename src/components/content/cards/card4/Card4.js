import React, {useState} from 'react'
import styled from 'styled-components';
import Input from '../../../header/Input'

import FaqList from './FaqList'
import {myData} from './Data'

function Card4() {
  const [data, setData] = useState(myData)
  
  const openFAQ = (id) => {
    const newData1 = data.map((item) => {
        if(item.id === id){
          return {...item, isOpened: !item.isOpened}
        }
        return {...item, isOpened: false}
      })
 
    setData(newData1)
  }
  // const openFAQ = (id) => {
  //   //this is our selected item
  //   const obj = data.find((item) => item.id === id)
  //   obj.isOpened = !obj.isOpened
  //   //set all items to false (closed)
  //   const newData1 = data.map((item) => {
  //       return {...item, isOpened: false}
  //     })
  //   //set our current menu item to opened or closed
  //   const newData2 = newData1.map((item) => {
  //     if(item.id === obj.id){
  //       item.isOpened = obj.isOpened
  //     } 
  //     return item
  //   })
  //   setData(newData2)
  // }
  return (
    <CardBlock>
      <div className="container-fluid p-0">
        <div className="row mb-5 py-2 d-flex justify-content-center align-items-center">
          <div className="col-11 col-xs-9 col-sm-9 col-lg-8 col-md-8 col-xl-7 text-center p-0 mx-auto ">
            <h1 className="text-center mt-4 mb-3 py-2 py-lg-4 ">Frequently Asked Questions</h1>
              <div className="faq-list mx-auto">
                {data.map((item) => {
                  return(
                      <FaqList key={item.id} item={item} openFAQ={openFAQ}/>
                  )})}
              </div> 
              <p className="text-white d-block d-lg-none mt-4">Ready to watch? Enter your email to <br/> create or restart your membership.</p>
              <div className="mt-2 mt-lg-5">
                <Input />
              </div>
              <p className="text-white d-none d-lg-block mt-2">Ready to watch? Enter your email to create or restart your membership</p>
          </div>
        </div>
      </div>
    </CardBlock>
  )
}

export default Card4

const CardBlock = styled.div`
border-bottom: 8px solid #222;
.faq-list {
  max-width: 1000px;
}
.faq-list__title{
  background: #303030;
  max-width: 800px;
  cursor: pointer;
}
.faq-list__content{
  background: #303030;
  max-width: 800px;
  border-bottom: 6px solid #000;
}
.svg-icon {
  fill: #fff;
}
  `
 