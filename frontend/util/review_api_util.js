export const fetchReviews = () => {
    return (
        $.ajax({
            method: "GET", 
            url: `/api/reviews`
        })
    )
}

export const fetchReview = (reviewId) => {
    return (
        $.ajax({
            method: "GET", 
            url: `/api/reviews/${reviewId}`
        })
    )
}

export const createReview = (formData) => {
    return (
        $.ajax({
            method: "POST", 
            url: `/api/reviews/`, 
            data: formData
        })
    )
}
 
export const updateReview = (review) => {
    return (
        $.ajax({
            method: "PATCH", 
            url: `/api/reviews/${review.id}`, 
            data: review
        })
    )
}

export const deleteReview = (reviewId) => {
    return (
        $.ajax({
            method: "DELETE", 
            url: `/api/reviews/${reviewId}`
        })
    )
}