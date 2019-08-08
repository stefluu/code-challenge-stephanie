class AddQuantityToFoodItem < ActiveRecord::Migration[5.2]
  def change
    add_column :food_items, :quantity, :integer, :default => 0
  end
end
