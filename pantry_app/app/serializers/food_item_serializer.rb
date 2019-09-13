class FoodItemSerializer < ActiveModel::Serializer
    attributes :id, :name, :brand, :quantity, :section, :shelf

    def shelf
        section = object.section

        shelf = Shelf.find_by_id(section.shelf_id)
            ShelfSerializer.new(shelf)
    end
end