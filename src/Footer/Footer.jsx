import React from 'react';
import './Footer.css'
import instagram from "../assets/insta.png"
import vid from "../assets/vid.png"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='line'></div>
      <div className='flex'>
        <div>SEAT CUPRA S.A.U. 2022 ®</div>
        <div className='textBox'>
          <p>Obowiązek informacyjny</p>
          <div></div>
          <p>Polityka cookies</p>
        </div>
        <div className='socialBox'>
          <img src={instagram} />
          <img src={vid} />
        </div>
      </div>
    </div>
  )
}
