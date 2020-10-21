import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = (props) => {
    return(
        <div>
            <Link to={`/recipes/${props.recipe.id}`}>{props.recipe.title}</Link>
            {/* <Link to={`/posts/${props.post.id}/edit`}>Edit</Link> */}
            {/* <button type="submit" 
                onClick={() => props.deletePost(props.post.id)} /> */}
        </div>
    )
}

export default RecipeIndexItem;