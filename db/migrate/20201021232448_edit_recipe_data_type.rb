class EditRecipeDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :recipes, :prep_time, :float
    change_column :recipes, :cook_time, :float
    change_column :recipes, :number_of_servings, :float
  end
end
