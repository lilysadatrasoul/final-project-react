import Card from '../component/Card.jsx';
import React, { useState, useEffect } from "react";


export default function Products(item) {

            const [products, setProducts] = useState([]);

            useEffect(() => {
              fetch(
                // "https://api.spoonacular.com/recipes/random?number=1&apiKey=0e06877433d94ceb9817016d645ec508"
           
             
      
              )
                .then((res) => res.json())
                .then((data) => setProducts(data.recipes))
                // .then((data) => console.log(data))
                .catch((error) => console.log(error));
            }, []);






  return (
    <div className="container ps-5 mt-5 pt-5 ">
      <div >
        <div className="row">
          <div className="col-12">
            <h3 className="bg-dark text-light">New Recipes</h3>
          </div>
        </div>
      </div>
  

      {products.map((item) =>(
                     
                     <Card
                     title={item.title}
                     image={item.image}
                   />
      ))}
          
    </div>
  )
}
