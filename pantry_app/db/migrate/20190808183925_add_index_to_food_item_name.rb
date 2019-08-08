class AddIndexToFoodItemName < ActiveRecord::Migration[5.2]
  def change
    add_index :food_items, :name
  end
end
