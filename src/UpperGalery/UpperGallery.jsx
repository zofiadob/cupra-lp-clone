import React from 'react';
import "./UpperGallery.css"
import imgLong from "../assets/CUPRA FORMENTOR_5.png"
import imgWide from "../assets/CUPRA FORMENTOR_6.png"
import ContentButton from '../ContentButton/ContentButton';

export default function UpperGallery() {
  return (
    <div className='upperGallery'>
      <div className='container'>
        <div className='upperBox'>
          <p className='headerText galleryText'>WYPRÓBUJ</p>
          <p className='text'>Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym połączeniem technologii, mocy, elegancji i komfortu.</p>
        </div>
        <div className='grid'>
          <div>
            <div>
              <div className='imageBox'>
                <img src={imgWide} />
                <p className='modelName description'>Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.
                </p>
              </div>
            </div>
            <div className='shortBox'>
              <p className='headerText galleryText galleryTextSmall'>TYLKO DLA ODWAŻNYCH</p>
              <p className='text'>Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co najlepsze w marce CUPRA.</p>
              <ContentButton variant={"creme"} text={"Umów jazdę próbną"} />
            </div>
          </div>
          <div className='longBox'>
            <img src={imgLong} />
            <p className='modelName description'>Podróżuj z rozmachem bez kompromisów.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
