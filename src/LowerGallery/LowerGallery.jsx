import React from 'react';
import './LowerGallery.css'
import firstImage from '../assets/CUPRA FORMENTOR_1.jpg';
import secondImage from '../assets/CUPRA FORMENTOR_2.jpg';
import thirdImage from '../assets/CUPRA FORMENTOR_3.jpg';
import GalleryBox from './GalleryBox';

export default function LowerGallery() {

    const galleryInfo = [
        {
            upText: 'Technologia',
            text: 'Poczuj pełną wolność jazdy dzięki licznym innowacjom.',
            image: firstImage,
            reverse: false,
        },
        {
            upText: 'Potęga Designu',
            text: 'Crossover emanujący gracją, dynamizmem i czystym wyrafinowaniem.',
            image: secondImage,
            reverse: true,
        },
        {
            upText: 'Design wnętrza',
            text: 'Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu CUPRY.',
            image: thirdImage,
            reverse: false,
        },
    ]

    return (
        <div className='upperGallery lowerGallery'>
            {galleryInfo.map((item, index) => {
                return (<GalleryBox key={index} upText={item.upText} header={item.text} image={item.image} reverse={item.reverse} />);
            })}
        </div>
    )
}
