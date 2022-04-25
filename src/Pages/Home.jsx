import React from 'react'
import pizza from "../assets/images/pizza-barbecue.jpg";

export default function Home() {
    return (
        <div className='hero'>
            <div className="card  text-white">
                <img src={pizza} className="card-img border-0" alt="background" height="650px" />
                <div className="card-img-overlay form">
                    <div className="col-md-6">
                        <div className="text-center ps-5 pt-5">
                            <div className="forms p-4 py-5 bg-white rounded">
                                <h2 className="card-title text-secondary">Search Recipes of Food</h2>
                                <div className="mt-4 inputs"> <input type="text" class="form-control" placeholder="Search Recipes" />  </div>
                                <div className="form-group col-md-4 text-secondary bg-dark fw-2 mt-3 d-flex justify-content-center">
                                    <label for="inputState"><p>Number of Recipes:</p></label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="button mt-4 text-left"> <button class="btn btn-warning">Send</button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
