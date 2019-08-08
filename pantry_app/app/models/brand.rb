class Brand < ApplicationRecord
    validates :name, presence: true, uniquenss: true

    has_many: food_items
end