class FoodItem < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :section_id, presence: true
    validates :brand_id, presence: true

    belongs_to :brand
    belongs_to :section

end