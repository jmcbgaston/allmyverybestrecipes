# == Schema Information
#
# Table name: recipes
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  description        :string           not null
#  directions         :string           not null
#  prep_time          :integer          not null
#  cook_time          :integer          not null
#  number_of_servings :integer          not null
#  author_id          :integer          not null
#  favorited_id       :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Recipe < ApplicationRecord

    validates :title, :description, :directions, :prep_time, :cook_time, :number_of_servings, presence: true
    validates :prep_time, :cook_time, :number_of_servings, numericality: { only_integer: true }

    belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"
    
    belongs_to :favoritor,
    foreign_key: :favorited_id,
    class_name: "User", 
    optional: true
    
    # association for a through
    has_many :recipe_ingredients, 
    foreign_key: :recipe_id, 
    class_name: "RecipeIngredient"

    has_many :ingredients, 
    through: :recipe_ingredients
    
end
