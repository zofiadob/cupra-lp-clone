import React from 'react'
import './ContentButtons.css'

export default function ContentButton({ variant, text, isRound = false }) {
    return (
        <button className={`button ${variant} ${isRound ? "round" : ""}`}>{text}</button>
    )
}
