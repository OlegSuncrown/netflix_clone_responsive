import React from 'react'
import logo from '../../svg/logo.svg'
import styled from 'styled-components'

function Nav() {
  return (
    <NavContainer>
      <div className="container-fluid p-0" style={{maxWidth: '2000px'}}>
        <div className="row mx-4 mx-sm-5">
          <div className="col-6  p-0">
            <img className ="logo" src={logo} />
          </div>
          <div className="col p-0">
            <div type="button" className ="bt ml-auto text-center py-1">Sign In</div>
          </div>
        </div>
      </div>
    </NavContainer>
  )
}
export default Nav

const NavContainer = styled.div`
  padding-top: 25px;  
  height: 5rem;
  position: relative;
  z-index: 2;
  .logo {
    max-width: 170px !important;
  }
  .bt {
    background: var(--red-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    max-width: 90px;
    min-width: 70px;
  }
  /* sm */

@media (min-width: 300px) {
  .logo {
        width: 90px;
    }
/* sm */
@media (min-width: 553px) {
  .logo {
        width: 110px;
    }
}
/* md */
@media (min-width: 951px) {
  .logo {
        width: 130px;      
    }
}
/* lg */
@media (min-width: 1200px) {
    .logo {
        width: 170px;
    }
}
`
