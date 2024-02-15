// © 2024 gparap
import React from 'react'
import '../styles/modal.css';

function Modal({ isModalOpen, closeModal, recipeData }) {
    return (
        <div>
            {
                isModalOpen && (
                    <div className="modal-recipe modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            {/* Recipe Title */}
                            <div className="modal-header">
                                <h1 className="modal-title fs-4" id="modalRecipeTitle">{recipeData.title}</h1>
                                <button onClick={closeModal} type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            {/* Actual Recipe */}
                            <div className="modal-body">
                                {/* Recipe Image */}
                                <img className="card-img-top w-100 d-block" src={recipeData.image} id="modalRecipeImage" alt="" />
                                {/* Recipe Details */}
                                <br />
                                <p><b>Description:</b></p>
                                <p>{recipeData.description}</p>
                                <br />
                                <p><b>Ingredients:</b></p>
                                {recipeData.ingredients.map(ingredient => (
                                    <p>{ingredient}</p>
                                ))}
                                <br />
                                <p><b>Instructions:</b></p>
                                {recipeData.instructions.map((instruction, index) => (
                                    <p key={index}>{index + 1}. {instruction}</p>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button onClick={closeModal} type="button" className="btn btn-dark">Close Recipe</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Modal
