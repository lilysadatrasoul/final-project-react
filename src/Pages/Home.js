import React from 'react'
import { useState, useEffect } from "react";
import pizza from "../assets/images/pizza-barbecue.jpg";
import Card from "../component/Card.jsx"

export default function Home() {

    const [foodName, setFoodName] = useState("");
    const [foodNumber, setFoodNumber] = useState("1");
    const [product, setProduct] = useState([]);
    

    // apiKey=0e06877433d94ceb9817016d645ec508

    function search(e) {
        e.preventDefault();
        fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${foodName}&number=${foodNumber}&apiKey=b36f35317b8f475d81b392c7e6599dfe`
        )
            .then((res) => res.json())
            .then((product) => {
                setProduct(product.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
        fetch(
            "https://api.spoonacular.com/recipes/random?number=2&apiKey=b36f35317b8f475d81b392c7e6599dfe"

        )
            .then((res) => res.json())
            .then((product) => {
                setProduct(product.recipes)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);


    return (



        <div>

            <div className='hero'>
                <div className="card ">

                    <img src={pizza} className="card-img border-0" alt="background" height="650px" />


                    <div className="card-img-overlay" id='card-img-overlay'>
                        <div className="col-md-6">
                            <div className="text-center ps-5 pt-5">
                                <div className=" p-4 pt-5 bg-light opacity-75 rounded">
                                    <h2 className="card-title text-dark">Search Recipes of Food</h2>



                                    <form className="mt-5 ms-3">
                                        <input
                                            value={foodName}
                                            onChange={(event) => setFoodName(event.target.value)}
                                            placeholder="Search Recipes"
                                            className="input mx-2"
                                        />
                                        <br/>
                                        <br/>
                                        <input 
                                            value={foodNumber}
                                            onChange={(event) => setFoodNumber(event.target.value)}
                                            type="number"
                                            className="input"
                                            placeholder="Count Of Recipes"
                                        />
                                        <div><button className="btn btn-warning mt-4" onClick={search}>search</button></div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <br />

            <div className="row ">
                <div className="col-12">
                    <h3 className="bg-dark text-light mt-5 mb-5 d-flex justify-content-center">New Recipes</h3>
                </div>
            </div>

            <div className="d-flex justify-content-evenly flex-wrap">
                {product.map((item) => (
                    <Card
                        title={item.title}
                        image={item.image}

                    />
                ))

                }
            </div>
        </div>
    );
}
