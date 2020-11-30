class EditShoppingListTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :shopping_lists, :items
    add_column :shopping_lists, :items, :string, default: [], array: true
  end
end
