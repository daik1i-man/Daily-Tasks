import React from 'react'
import { RiseLoader } from 'react-spinners'

export default function IsLoader() {
    return (
        <div className="absolute top-[48%] left-[47%]">
            <RiseLoader size={15} color="#5200ff" />
        </div>
    )
}
