# Panty App

##See bottom for run instructions for specs

Using the stack below. Build the following app.
Push your code to this repo. We should be able to run your project so provide any necessary documentation.

We would also like to see test.

Spend no more than 2 hours on this problem. If you don't get finished in 2 hours, no worries it's not a fail. We'll talk   

## Stack
- PosgreSQL
- Python or Ruby On Rails

## App
Build a pantry application that tracks the items that are in a pantry. The items should be stored in the database. 
There should be an API layer that exposes `GET`, `PUT`,`POST`,`PATCH`, and `DELETE` routes for the items. 

### Extra credit
- Secure the API with some kind of authentication.
- Add some form of relationship in the database. For example maybe there are `products` and `brands` and a `brand` has multiple `products`
- Containerize the project (docker)

## To Run Specs
- Change into pantry_app directory
- Bundle install
- From root pantry_app, run specs with the following command:

bundle exec rspec spec/model/ (spec file you want to run)

-Below are the spec files that can be run:

bundle exec rspec spec/models/shelf_spec.rb
bundle exec rspec spec/models/section_spec.rb
bundle exec rspec spec/models/food_item_spec.rb
bundle exec rspec spec/models/brand_spec.rb

