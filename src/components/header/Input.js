import React from 'react'
import styled from 'styled-components'

function Input() {
  return (
    <div className="container-fluid p-0" style={{maxWidth: '1000px'}}>
      <InputContainer>
        <div className="row justify-content-center" >
          <div className="col-10 col-lg-7  text-center px-0 ">
            <input className="w-100 py-2 py-lg-3 py-xl-4" placeholder=" Email address"/>
          </div>
          <div className="col-7 col-lg-5 col-md-5 p-0 ">
            <button 
              className="btn 
                mt-3 mt-lg-0 
                py-0 py-lg-3 py-xl-4
                px-0">TRY 30 DAYS FREE
                <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>  
            </button>  
          </div>
        </div>
      </InputContainer>
    </div>
  )
}

export default Input

const InputContainer = styled.div`

.btn {
  background: var(--red-color);
  color: #fff;
  border: none;
  border-radius: 2px;
  height: 100%;
  width: 100%;
  font-size: 30px;
  padding: 0px 5px !important;
  transition: all 0.2s ease;
  display: inline-block;
  text-align: center;
}
.btn:hover {
  background: #f51620;
}
.bi{
  margin-bottom: 7px;
  margin-left: 0px;
}
@media (max-width: 1199px) {
  .btn {
    font-size: 25px;
  } 
  .bi{
    margin-bottom: 5px;
    margin-left: 5px;
  }
}
@media (max-width: 991px) {
  .btn {
    max-width: 220px;
    font-size: 17px;
    padding: 0px 0px !important;
  }
  .bi{
    margin-bottom: 3px;
    margin-left: 5px;
  }
}
`
