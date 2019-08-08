class ShelvesController < ApplicationController

    def index
        @shelves = Shelf.all
    end

    def show
        begin
            @shelf = Shelf.find(params[:id])
        rescue
            ActiveRecord::RecordNotFound
            redirect_to shelves_url()
        end
    end


end
