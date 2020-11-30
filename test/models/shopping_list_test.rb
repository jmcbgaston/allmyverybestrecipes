# == Schema Information
#
# Table name: shopping_lists
#
#  id       :bigint           not null, primary key
#  owner_id :integer          not null
#  items    :string           default([]), not null, is an Array
#
require 'test_helper'

class ShoppingListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
