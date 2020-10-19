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
require 'test_helper'

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
