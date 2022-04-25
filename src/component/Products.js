import React,{useState , useEffect} from 'react'

export default function Products() {


 
 
  return (
    <div className=" d-flex flex-wrap  mb-5">
    {
      products.map( item=>
       <Products id={item.id} title={item.title} price={item.price}  image={item.image} />  
   
      )
    }
    </div>
  )
}
