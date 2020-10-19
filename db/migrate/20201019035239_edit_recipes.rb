class EditRecipes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :recipes, :favorited_id, true
  end
end
