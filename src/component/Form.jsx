import React from 'react'
import pizza from "../assets/images/pizza-barbecue.jpg";

export default function Form() {
    return (
        <div className='hero'>
            <div className="card ">

                <img src={pizza} className="card-img border-0" alt="background" height="650px" />


                <div className="card-img-overlay" id='card-img-overlay'>
                    <div className="col-md-6">
                        <div className="text-center ps-5 pt-5">
                            <div className=" p-4 pt-5 bg-light opacity-75 rounded">
                                <h2 className="card-title text-dark">Search Recipes of Food</h2>
                                <div className="mt-5 ms-3"> <input type="text" placeholder="Search Recipes" />  </div>
                                <div className="mt-2 ms-3" id="selectState">   
                                    <select id="inputState"  >
                                        <option selected>Number of Recipes</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>

                                    </select>
                                    </div>
                                <div className="button mt-4 "> <button class="btn btn-warning">Send</button> </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
