class ShelvesController < ApplicationController

    def index
        @shelves = Shelf.all

        shelves = @shelves.map do |shelf|
            ShelfSerializer.new(shelf)
        end
        render json: {shelves: shelves}
    end

    def show
        @shelf = Shelf.find(params[:id])
        render json: ShelfSerializer.new(@shelf)
    end


end
