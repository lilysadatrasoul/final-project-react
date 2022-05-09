import React from 'react'

export default function cart({image,title}) {
  return (
    <div>
        <div className="Card ">
        <div className="CardHeader py-2">
          <img src={image} alt="#" className="CircleImage" />
          <div className="CardHeaderText">
            <h3 className="TitleCard">{title}</h3>
          </div>
        </div>
        </div>
    </div>
  )
}
