class Section < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :shelf_id, presence: true

    has_many :food_items
    belongs_to :shelf
end