import React from 'react'
import ContentButton from '../ContentButton/ContentButton'

export default function GalleryBox({ upText, header, image, reverse }) {

    return (
        <div className={`galleryRow ${reverse ? "reverse" : ""}`}>
            <img src={image} />
            <div className="overBox">
                <p className='modelName overDescription'>{upText}</p>
                <p className='headerText galleryTextSmall lowerGalleryText'>{header}</p>
                <ContentButton variant={'white'} text={'Umów jazdę próbną'} />
            </div>
        </div>
    )
}
