class Createreviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.integer :rating, null: false
      t.integer :recipe_id, null: false
      t.integer :reviewer_id, null: false
 
      t.timestamps
    end
  end
end
