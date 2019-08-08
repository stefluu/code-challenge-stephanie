class CreateFoodItem < ActiveRecord::Migration[5.2]
  def change
    create_table :food_items do |t|
      t.string :name, null: false, unique: true
      t.integer :section_id, null: false
      t.integer :brand_id, null: false

      t.timestamps

    end
    add_index :food_items, :section_id
    add_index :food_items, :brand_id
  end
end
