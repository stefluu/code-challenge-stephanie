class AddIndexToShelfName < ActiveRecord::Migration[5.2]
  def change
    add_index :shelves, :name
  end
end
