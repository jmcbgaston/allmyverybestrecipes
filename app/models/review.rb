# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  rating      :integer          not null
#  recipe_id   :integer          not null
#  reviewer_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord

    validates :body, :rating, :recipe_id, :reviewer_id, presence: true

    belongs_to :recipe,
    foreign_key: :recipe_id,
    class_name: "Recipe"
    
    belongs_to :reviewer,
    foreign_key: :reviewer_id,
    class_name: "User"

end
