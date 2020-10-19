class Addindexrecipes < ActiveRecord::Migration[5.2]
  def change
    add_index :recipes, :author_id
    add_index :recipes, :favorited_id
  end
end
