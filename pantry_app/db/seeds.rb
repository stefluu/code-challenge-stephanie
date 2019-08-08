# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


shelf1 = Shelf.create({name: "Shelf 1"})

section1 = Section.create({name: "Pasta", shelf_id: 1})

food_item1 = FoodItem.create({name: "Spaghetti", section_id: 1, brand_id: 1, quantity: 3})

brand1 = Brand.create({name: "Trader Joe's"})