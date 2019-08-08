require 'rails_helper'

RSpec.describe Section, type: :model do
  subject { Section.new(name: "Spices", shelf_id: 1) }
  
  describe "Validations" do
    it { should validate_presence_of(:name) }

    it { should validate_uniqueness_of(:name) }

    it { should validate_presence_of(:shelf_id) }

  end

  describe "Associations" do

    it { should have_many(:food_items) }

    it { should belong_to(:shelf) }
  end
end
