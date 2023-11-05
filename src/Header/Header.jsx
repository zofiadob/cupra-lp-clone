import React from 'react'
import ContentButton from '../ContentButton/ContentButton';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='headerBox'>
      <div className='modelName'>CUPRA Formentor</div>
      <div className='headerText'>Wejdź do świata Cupra.
        Poznaj prawdziwą moc i&nbsp;sportowego ducha marki.
      </div>
      <ContentButton variant={"creme"} text={"Ruszaj na jazdę testową"} />
      </div>
    </div>
  )
}
