import React from 'react'
import styled from 'styled-components';
import card3 from '../../../images/card3.png'

function Card3() {

  return (
    <CardBlock>
    <div className="container-md">
      <div className="row py-2" >

        <div className="col-lg-6 mycol d-flex justify-content-center align-items-center text-center text-lg-left pt-5 pt-lg-0 ">
          <div>
            <h1>Enjoy on your TV.</h1>
            <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more</h3>
          </div>
        </div>

        <div className="col-lg-6 mycol d-flex justify-content-center align-items-center py-3 pb-5 py-lg-5">
          <div className="video-container">
            <img src={card3} className="imgCard1 w-100"></img>
              <div className="videoBox">
                <video autoPlay loop muted className="h-100 w-100" >
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                </video>
              </div>
            </div>
        </div>
      </div>
    </div>
    </CardBlock>
  )
}

export default Card3

const CardBlock = styled.div`
border-bottom: 8px solid #222;
  .video-container  {
    position: relative;
    overflow: hidden;
  }
  .imgCard1 {
    position: relative;
    z-index: 2;
  }
  .videoBox {
      width: 100%;
      height: 100%;
      max-width: 65%;
      max-height: 100%;
      position: absolute;
      top: 44%;
      left: 50%;
      transform: translate(-50%,-60%);
    }
  }
  `
