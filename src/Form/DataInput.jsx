import React, { useState } from 'react'

export default function DataInput({ name, isObligatory }) {

    const [value, setValue] = useState("")

    return (
        <input key={name} placeholder={`${name} ${isObligatory ? "*" : ""}`}></input>
    )
}
