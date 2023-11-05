import React, { useState } from 'react';
import "./Menu.css";
import cupraLogo from '../assets/cupra_logo.svg'
import ContentButton from '../ContentButton/ContentButton';
import menuIcon from '../assets/menu-icon.svg';

export default function Menu() {

    const menuItems = ["Samochody", "Jazda próbna", "Oferta", "Salony Cupra"];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='menu'>
            <div className='logoBox'>
                <img className='logo' src={cupraLogo} />
            </div>
            <div className='menuIconBox' onClick={() => { setIsOpen(!isOpen) }}>
                <img src={menuIcon} />
            </div>
            <div className={`menuItemsBox ${!isOpen && "hidden"}`}>
                {menuItems.map((item, index) => (<div key={index} className='menuItem'><a key={index}>{item}</a></div>))}
            </div>
            <div className={`linksBox ${!isOpen && "hidden"}`}>
                <span className='phoneLink'>+48 58 506 65 65</span>
                <ContentButton variant={"white"} text={"Zapytaj o ofertę"} />
                <ContentButton variant={"black"} text={"Umów jazdę próbną"} />
            </div>
        </div>
    )
}
