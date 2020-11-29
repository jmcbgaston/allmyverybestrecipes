@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :body, :rating, :recipe_id, :reviewer_id
    end
end