import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Products(item) {

            const [products, setProducts] = useState([]);

            useEffect(() => {
              fetch(
                "https://api.spoonacular.com/recipes/random?number=2&apiKey=0e06877433d94ceb9817016d645ec508"
                // "https://fakestoreapi.com/products"
      
              )
                .then((res) => res.json())
                .then((data) => setProducts(data))
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
            }, []);


  return (
    <div>
      <div className="container ps-5 mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h3 className="bg-dark text-light">New Recipes</h3>
          </div>
        </div>
      </div>
  

      {products.map(item =>
                     
                      <div className="py-2">
                        <div className="Card ">
                          <div className="CardHeader py-2">
                            <img src={item.image} alt="#"  />
                            <div className="CardHeaderText">
                              <h3 className="TitleCard">{item.title}</h3>
                            </div>
                          </div>
                          <div>
                                <div className="img-rec">
                                    <img className="image-recipes CardImage"src={item.image} alt="#"></img>
                                </div>
                           
                          
                          </div>
                        </div>
                      </div>

      


      )}
          
    </div>
  )
}
