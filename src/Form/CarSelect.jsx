import React, { useCallback, useState } from 'react';
import formentor from '../assets/cupra_trans_5.png';
import leon from '../assets/cupra_trans_3.png';
import leonSport from '../assets/cupra_trans_2.png';
import ateca from '../assets/cupra_trans_1.png';
import born from '../assets/cupra_trans_4.png';
import arrow from '../assets/arrow-down.svg';

export default function CarSelect() {

  const cars = [
    {
      name: "Cupra Formentor",
      img: formentor,
    },
    {
      name: "Cupra Leon",
      img: leon,
    },
    {
      name: "Cupra Leon Sportstourer",
      img: leonSport,
    },
    {
      name: "Cupra Ateca",
      img: ateca,
    },
    {
      name: "Nowa Cupra Born",
      img: born,
    },
  ]

  const [currentCar, setCurrentCar] = useState(cars[0]);
  const [dropped, setDropped] = useState(false);

  const handleClick = (name, img) => {
    setCurrentCar({ name, img });
    setDropped(false);
  }

  return (
    <div className='carSelectContainer'>
      <div className='chosenCar listWidth' onClick={() => { setDropped(!dropped) }}>
        <div>
          <img src={currentCar.img} />
          <span>{currentCar.name}</span>
        </div>
        <div className={`arrow ${dropped && "rotated"}`}>
          <img src={arrow} />
        </div>
      </div>
      <ul className={`carList listWidth ${!dropped && "hidden"}`}>
        {cars.map((car, index) => {
          return (
            <li className='listWidth' key={index} onClick={() => handleClick(car.name, car.img)}>
              <div>
                <img src={car.img} />
                <span>{car.name}</span>
              </div>
              <div className='phantomDiv'></div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
