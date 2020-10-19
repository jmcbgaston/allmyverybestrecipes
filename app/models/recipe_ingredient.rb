# == Schema Information
#
# Table name: recipe_ingredients
#
#  id            :bigint           not null, primary key
#  recipe_id     :integer          not null
#  ingredient_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class RecipeIngredient < ApplicationRecord

    belongs_to :recipe, 
    foreign_key: :recipe_id, 
    class_name: "Recipe"

    belongs_to :ingredient, 
    foreign_key: :ingredient_id, 
    class_name: "Ingredient"

end
