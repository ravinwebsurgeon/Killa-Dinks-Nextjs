import React from 'react'

const CustomButton = ({className='',labelText='',onClick=()=>null}:any) => {
  return (
    <div
    className={ ` p-3   cursor-pointer ${className} `} onClick={onClick}
    >{labelText}</div>
  )
}

export default CustomButton