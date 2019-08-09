# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


shelf1 = Shelf.create({name: "Shelf 1"})
shelf2 = Shelf.create({name: "Shelf 2"})
shelf3 = Shelf.create({name: "Shelf 3"})

section1 = Section.create({name: "Spices", shelf_id: 1})
section2 = Section.create({name: "Snacks", shelf_id: 2})
section3 = Section.create({name: "Breakfast", shelf_id: 1})
section4 = Section.create({name: "Boxed Pasta", shelf_id: 3})
section5 = Section.create({name: "Cans", shelf_id: 3})
section6 = Section.create({name: "Healthy Stuff", shelf_id: 2})



food_item1 = FoodItem.create({name: "Mac and Cheese", section_id: 4, brand_id: 2})
food_item2 = FoodItem.create({name: "Chips", section_id: 2, brand_id: 3})
food_item3 = FoodItem.create({name: "Cookies", section_id: 2, brand_id: 4})
food_item4 = FoodItem.create({name: "Candies", section_id: 2, brand_id: 1})
food_item5 = FoodItem.create({name: "Cinnamon", section_id: 1, brand_id: 1})
food_item6 = FoodItem.create({name: "Veggie Chips", section_id: 6, brand_id: 2})
food_item7 = FoodItem.create({name: "Oatmeal", section_id: 3, brand_id: 3})
food_item8 = FoodItem.create({name: "Mushroom Soup", section_id: 5, brand_id: 4})
food_item9 = FoodItem.create({name: "Chicken Broth", section_id: 5, brand_id: 2})
food_item10 = FoodItem.create({name: "Spaghetti", section_id: 4, brand_id: 1})
food_item11 = FoodItem.create({name: "Pancake Mix", section_id: 3, brand_id: 1})


brand1 = Brand.create({name: "Trader Joe's"})
brand2 = Brand.create({name: "Target"})
brand3 = Brand.create({name: "Safeway"})
brand4 = Brand.create({name: "Whole Foods"})