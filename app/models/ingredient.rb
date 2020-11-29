# == Schema Information
#
# Table name: ingredients
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  quantity_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  amount        :string
#
class Ingredient < ApplicationRecord

    validates :amount, :name, :quantity_type, presence: true 
    # validates :name, uniqueness: true 

    # association for a through
    has_many :recipe_ingredients, 
    foreign_key: :ingredient_id, 
    class_name: "RecipeIngredient"

    has_many :recipes_its_used_in,
    through: :recipe_ingredients 

end
