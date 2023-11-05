import React, { useState } from 'react'

export default function Checkbox({text}) {

    const [checked, setChecked] = useState(false);
    const handleClick = () => setChecked(!checked);

  return (
    <div className='checkbox'>
        <div className='check' onClick={handleClick} checked={checked} >
           {checked && <div></div>}
        </div>
        <span>{text}</span>
    </div>
  )
}
