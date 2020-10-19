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
require 'test_helper'

class RecipeIngredientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
