import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = (props) => {
    return(
        <div>
            <Link to={`/recipes/${props.recipe.id}`}>
                {props.recipe.title}
            </Link>
        </div>
    )
}

export default RecipeIndexItem;