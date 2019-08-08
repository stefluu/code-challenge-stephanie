class Brand < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :food_items
end