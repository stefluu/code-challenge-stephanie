class FoodItemsController < ApplicationController
    def new
        @food_item = FoodItem.new
    end

    def create
        @food_item = FoodItem.new(food_item_params)
        if @food_item.save!
            redirect_to food_item_url(@food_item)
        else
            flash[:errors] = @food_item.errors.full_messages
            redirect_to new_food_item_url(@food_item)
        end
    end

    def show
        @food_item = FoodItem.find(params[:id])
    end

    def index
        @food_items = FoodItem.all
    end

    def edit
        @food_item = FoodItem.find(params[:id])
    end

    def update
        @food_item = FoodItem.find(params[:id])
        if @food_item.update_attributes(food_item_params)
            render :show
        else
            flash[:errors] = @food_item.errors.full_messages
            redirect_to section_url(@food_item)
        end
    end
    
    def destroy
        @food_item = FoodItem.find(params[:id])
        @food_item.destroy
        redirect_to food_items_url(@food_item)
    end

    private
    def food_item_params
        params.require(:food_item).permit(:name, :section_id, :brand_id, :quantity)
    end
end
