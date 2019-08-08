class CreateShelf < ActiveRecord::Migration[5.2]
  def change
    create_table :shelves do |t|
      t.string :name, null:false, unique: true

      t.timestamps
    end
  end
end
