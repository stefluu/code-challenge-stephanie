class ShelfSerializer < ActiveModel::Serializer
    attributes :id, :name, :sections, :food_items
end