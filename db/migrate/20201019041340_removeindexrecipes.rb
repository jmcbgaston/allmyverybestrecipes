class Removeindexrecipes < ActiveRecord::Migration[5.2]
  def change
    remove_index :recipes, :author_id
    remove_index :recipes, :favorited_id
  end
end
