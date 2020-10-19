class CreateRecipeIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_ingredients do |t|
      t.integer :recipe_id, null: false
      t.integer :ingredient_id, null: false

      t.timestamps
    end
    add_index :recipe_ingredients, :recipe_id, unique: true
    add_index :recipe_ingredients, :ingredient_id, unique: true
  end
end
