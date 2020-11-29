# == Schema Information
#
# Table name: recipes
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  description        :string           not null
#  directions         :string           not null
#  prep_time          :float            not null
#  cook_time          :float            not null
#  number_of_servings :float            not null
#  author_id          :integer          not null
#  favorited_id       :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  ingredients        :string
#
class Recipe < ApplicationRecord

    validates :title, :description, :directions, :prep_time, :cook_time, :number_of_servings, :ingredients, presence: true
    validates :prep_time, :cook_time, :number_of_servings, numericality: { greater_than_or_equal_to: 0 }
    validates :prep_time, :cook_time, :number_of_servings, numericality: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"
    
    belongs_to :favoritor,
    foreign_key: :favorited_id,
    class_name: "User", 
    optional: true

    has_many :reviews,
    foreign_key: :recipe_id,
    class_name: "Review"
    
    # association for a through
    # has_many :recipe_ingredients, 
    # foreign_key: :recipe_id, 
    # class_name: "RecipeIngredient"
    
    # has_many :ingredients, 
    # through: :recipe_ingredients
    
    # active storage photo
    has_one_attached :photo
    # optional: true

    # validate :ensure_photo

    # def ensure_photo
    #     unless self.photo.attached?
    #     errors[:photo] << "must be attached"
    #     end
    # end

end
