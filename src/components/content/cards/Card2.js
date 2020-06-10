import React from 'react'
import styled from 'styled-components';
import card2 from '../../../images/card2.jpg'
import card2Icon from '../../../images/card2-icon.png'
function Card1() {

  return (
  <Card2Block>
    <div className="container-md">
      <div className="row py-2">
        <div className="col-lg-6 mycol d-flex justify-content-center align-items-center text-center text-lg-left pt-5 pt-lg-0 order-lg-12">
          <div className="">
            <h1>Download your shows to watch offline.</h1>
            <h3>Save your favorites easily and always have something to watch.</h3>
          </div>
        </div>

        <div className="col-lg-6 mycol d-flex justify-content-center align-items-center py-md-3 pb-3 pb-md-0  ">
          <div className="card2-container">
            <img src={card2} className="imgCard1" />
            <div className="cardSpan">
              <img src={card2Icon} className="card2Icon " />
              <div className="spanText">
                <div className="spanText__1">Stranger Things</div>
                <div className="spanText__2">Downloading...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card2Block>
  )
}

export default Card1

const Card2Block = styled.div`
border-bottom: 8px solid #222;
.card2-container {
  position: relative;
  min-height: 100px;
} 
.imgCard1 {
  max-width: 100%;
  height: auto;
  border: 0;
} 
.cardSpan{
  padding: .5em .75em;
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  margin: 0 auto;
  background: #000;
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 20em;
  border: 2px solid rgba(255,255,255,.25);
  box-shadow: 0 0 2em 0 #000;
  border-radius: .75em;
  
}
.card2Icon {
  display: block;
  height: 4.5em;
  margin: 0 1em 0 0;
}
.spanText {
  margin: .3em 0;
  flex-grow: 1;
  flex-shrink: 1;
}
.spanText__1 {
  font-size: 1em ;
  color: #fff ;
  display: block;
}
.spanText__2 {
  font-size: .9em;
  color: white;
  color: #0071eb;
}
.cardSpan::after {
  width: 3em;
  height: 3.75em;
  display: block;
  background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif) center center no-repeat;
  background-size: 100%;
  content: '';

}
  `
