class Edittablename < ActiveRecord::Migration[5.2]
  def change
    rename_table :shopping_list_tables, :shopping_list
  end
end
