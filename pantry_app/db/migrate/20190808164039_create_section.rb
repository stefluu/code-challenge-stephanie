class CreateSection < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :name, null: false, unique: true
      t.integer :shelf_id, null: false

      t.timestamps
    end
    add_index :sectons, :shelf_id
  end
end
