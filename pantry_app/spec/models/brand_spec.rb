require 'rails_helper'

RSpec.describe Brand, type: :model do
  subject { Brand.new(name: "Kellogs") }
  
  describe "Validations" do
    it { should validate_presence_of(:name) }

    it { should validate_uniqueness_of(:name) }
  end

  describe "Associations" do
    it { should have_many(:food_items) }
  end
end
