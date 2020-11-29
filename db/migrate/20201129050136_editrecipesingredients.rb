class Editrecipesingredients < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :ingredients
    add_column :recipes, :ingredients, :string
  end
end
