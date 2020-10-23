import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = (props) => {
    return(
        <div className="r-index-item">
            <Link to={`/recipes/${props.recipe.id}`}>
                <img src={props.recipe.photoUrl}/>
                <span className="r-index-item-info">
                    {props.recipe.title}
                </span>
            </Link>
        </div>
    )
}

export default RecipeIndexItem;