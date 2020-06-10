import React from 'react'
import styled from 'styled-components';

function Card5() {
  const footerList = ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test', 'Help Center', 'Jobs', 'Cookie Preferences', 'Legal Notices', 'Account', 'Ways to Watch', 'Corporate Information', 'Netflix Originals', 'Media Center', 'Terms of Use', 'Contact Us']
  return (
  <Footer>
    <div className="container pb-5 ">
      <div className="row pt-5 pb-3 ml-3" >
        <div className="col ">
          <a style={{fontSize:'18px'}} href="https://help.netflix.com/en/contactus">Questions? Contact us.</a>
        </div>
      </div>
      <div className="row ml-3" >
        {footerList.map((item, key) => {
          return(
            <div className="col-6 col-sm-4 col-md-3 ">
          <ul>
            <li><a key={key} href="https://help.netflix.com/en/contactus">{item}</a></li>
          </ul> 
        </div>
          )
        })}
      </div>
      <div className="row pt-5 pb-3 ml-3" >
        <div className="col ">
          <a >Netflix Ukraine</a>
        </div>
      </div>
    </div>
  </Footer>
)}
export default Card5

const Footer = styled.div`
ul, li {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
  line-height: 2;
}
a {
  color: #757575 ;
  font-size: 14px;
  display: block;
}
  `
