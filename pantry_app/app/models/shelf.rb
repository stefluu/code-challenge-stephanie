class Shelf < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    
    has_many :sections
    has_many :food_items, through: :sections
    has_many :brands, through: :food_items
end