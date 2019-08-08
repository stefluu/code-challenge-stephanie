class AddIndexToSectionName < ActiveRecord::Migration[5.2]
  def change
    add_index :sections, :name
  end
end
