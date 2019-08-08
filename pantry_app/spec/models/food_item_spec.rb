require 'rails_helper'

RSpec.describe FoodItem, type: :model do
  subject { FoodItem.new(
    name: "Cookies", quantity: 15, section_id: 1, brand_id: 1)}

    describe "Validations" do 
      it { should validate_presence_of(:name) }

      it { should validate_uniqueness_of(:name) }

      it { should validate_presence_of(:quantity) }

      it { should validate_presence_of(:brand_id) }
    end

    describe "Associations" do
      it { should belong_to(:brand) }

      it { should belong_to(:section) }
    end
end
