@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :author_id, :title, :description, :directions, :prep_time, :cook_time, :number_of_servings, :ingredients
        json.photoUrl url_for(recipe.photo) if recipe.photo.attached?
    end
end