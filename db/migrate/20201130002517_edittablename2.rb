class Edittablename2 < ActiveRecord::Migration[5.2]
  def change
    rename_table :shopping_list, :shopping_lists
  end
end
