import React, { useLayoutEffect, useState } from 'react';
import './Carousel.css';
import formentor from '../assets/cupra_trans_5.png';
import formentorVz from '../assets/cupra_trans_6.png';
import ateca from '../assets/cupra_trans_1.png';
import born from '../assets/cupra_trans_4.png';
import leon from '../assets/cupra_trans_3.png';
import sport from '../assets/cupra_trans_2.png';
import sliderArrow from '../assets/arrow-right.svg';
import { useRef } from 'react';
import Slide from './Slide';



export default function Carousel() {

    const slider = document.querySelector(".slider");
    const [width, setWidth] = useState(0);

    const ref = useRef(0);

    useLayoutEffect(() => {
        setWidth(ref.current.children[0].offsetWidth);
    }, []);

    const right = () => {
        slider.scrollLeft += width;

    };

    const left = () => {
        slider.scrollLeft += -width;
    }


    const cars = [
        {
            header: "CUPRA Formentor",
            subText: "Maksymalna prędkość: 204 KM/H Moc silnika: 150 KM",
            firstPrice: "1439 zł",
            secondPrice: "127 800 zł",
            img: formentor,
        },
        {
            header: "CUPRA Formentor VZ",
            subText: "Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM",
            firstPrice: "1553 zł",
            secondPrice: "152 400 zł",
            img: formentorVz,
        },
        {
            header: "CUPRA Ateca",
            subText: "Maksymalna prędkość: 247 KM/H Moc silnika: 300 KM",
            firstPrice: "2334 zł",
            secondPrice: "220 700 zł",
            img: ateca,
        },
        {
            header: "Nowa CUPRA Born",
            subText: "Akumulator 58 kWh moc do 204 KM²",
            firstPrice: "1943 zł",
            secondPrice: "179 600 zł",
            img: born,
        },
        {
            header: "Leon",
            subText: "Maksymalna prędkość: 245 KM/H Moc silnika: 300 KM",
            firstPrice: "1553 zł",
            secondPrice: "152 400 zł",
            img: leon,
        },
        {
            header: "Leon Sportstourer",
            subText: "Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM",
            firstPrice: "1601 zł",
            secondPrice: "156 200 zł",
            img: sport,
        },
    ]

    return (
        <div className='carouselContainer'>
            <div className='slider' ref={ref}>
                {cars.map((car, index) => {
                    return (
                        <Slide
                            key={index}
                            header={car.header}
                            subText={car.subText}
                            firstPrice={car.firstPrice}
                            secondPrice={car.secondPrice}
                            img={car.img} />
                    )
                })}
                <div className='slide'></div>
                <div className='slide'></div>
            </div>
            <div id="right" className='slideButton' onClick={right}>
                <img src={sliderArrow} />
            </div>
            <div id="left" className='slideButton' onClick={left}>
                <img src={sliderArrow} />
            </div>
        </div>
    )
}
