import React from 'react'
import ContentButton from '../ContentButton/ContentButton';

export default function Slide({ header, subText, firstPrice, secondPrice, img }) {

  return (
    <div className='slide'>
      <div className='slideHeader'>{header}</div>
      <div>
        <img className='slideImage' src={img} />
      </div>
      <p className='power'>{subText}</p>
      <div className='flexInfo smalleSlideText'>
        <span>Dostępny w leasingu z 0% opłaty własnej</span>
        <span>Rata netto/mies. od<br /><span>{firstPrice}</span></span>
        <span>Cena brutto już od<br /><span>{secondPrice}</span></span>
      </div>
      <div>
        <ContentButton variant={"black"} text={"Umów jazdę próbną"} />
      </div>
    </div>
  )
}
