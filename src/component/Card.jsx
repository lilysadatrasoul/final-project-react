import React from 'react'

export default function cart({image,title}) {
  return (
  
 
    <div>
        <div className="Card ">
        <div className="CardHeader ps-3">
          <img src={image} alt="#" className="CircleImage" />
          <div className="CardHeaderText mt-4">
            <h5 className="TitleCard">{title}</h5>
          
          </div>
        </div>
        </div>
    </div>
   );
}
