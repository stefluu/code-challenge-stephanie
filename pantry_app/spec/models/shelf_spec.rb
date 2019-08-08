require 'rails_helper'

RSpec.describe Shelf, type: :model do
  subject { Shelf.new(name: "Shelf 1") }

  describe "Validations" do
    it { should validate_presence_of(:name) }

    it { should validate_uniqueness_of(:name) }

  end

  describe "Associations" do
    it { should have_many(:sections) }

    it { should have_many(:food_items) }

    it { should have_many(:brands) }
  end
  
end
