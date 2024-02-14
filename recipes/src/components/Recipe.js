// © 2024 gparap
import React from 'react'
import '../styles/recipe.css'

function Recipe({ id, image, title, description }) {
    return (
        <div className="col-md-4" id={id}>
            <div className="card">
                <img className="card-img-top w-100 d-block" src={image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">
                        <p>{title}</p>
                    </h4>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-dark">View Recipe</button>
                </div>
            </div>
        </div>
    )
}

export default Recipe
