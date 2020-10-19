class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :directions, null: false
      t.integer :prep_time, null: false
      t.integer :cook_time, null: false
      t.integer :number_of_servings, null: false
      t.integer :author_id, null: false
      t.integer :favorited_id, null: false

      t.timestamps
    end
    add_index :recipes, :author_id, unique: true
    add_index :recipes, :favorited_id, unique: true
  end
end
