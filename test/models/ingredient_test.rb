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
require 'test_helper'

class IngredientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
