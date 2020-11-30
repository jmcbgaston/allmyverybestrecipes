# == Schema Information
#
# Table name: shopping_lists
#
#  id       :bigint           not null, primary key
#  owner_id :integer          not null
#  items    :string           default([]), not null, is an Array
#
class ShoppingList < ApplicationRecord

    validates :owner_id, presence: true, uniqueness: true
    
    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: "User"
    
end
