class CreateShoppingListTable < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_list_tables do |t|
      t.integer :owner_id, null: false
      t.string :items, array: true, default: [], null: false
    end
  end
end
