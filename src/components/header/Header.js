import React from 'react'
import Nav from './Nav'
import styled from 'styled-components';
import headerImage from '../../images/header.jpg'
import Input from './Input'

function Header() {
  return (
    <div className="container-fluid p-0">
      <HeaderContainer >
        <div className="showcase h-100">
          <Nav />
          <div className="row d-flex justify-content-center align-items-center myrow">
            <div className="col-12 col-lg-8 col-md-8 col-xl-7 text-center">
              <div className="content text-center ">

                <h1 className="text-white">Unlimited movies, TV <br/>shows, and more.</h1>
                <h3 className="text-white my-3 my-sm-4">Watch anywhere. Cancel anytime.</h3>
                <p className="text-white d-block d-lg-none">Ready to watch? Enter your email to <br/> create or restart your membership.</p>
                <Input />
                <p className="text-white d-none d-lg-block mt-2">Ready to watch? Enter your email to create or restart your membership</p>
                
              </div>
            </div>
          </div>

        </div>
      </HeaderContainer>
    </div>
  )
}

export default Header

const HeaderContainer = styled.header`
border-bottom: 8px solid #222;
height: 720px;
position: relative;
background: url(${headerImage}) no-repeat center center/cover;
.myrow {
  height: 85%;
}
.content{
  position: relative;
  z-index: 2;
}
h1{
  font-size: 3.8rem !important;
}
.showcase::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.6);
	box-shadow: inset 0px 40px 40px #000000, inset 0px -40px 40px #000000;
}
@media (max-width: 1000px) {
  h1{
    font-size: 3rem !important;
  }
}
@media (max-width: 593px) {
  height: 500px;
  h1{
    font-weight: 600 !important;
    font-size: 1.7rem !important;
    line-height: 27px !important;
  }
  .content{
    margin-bottom: 50px;
   }
}
`
