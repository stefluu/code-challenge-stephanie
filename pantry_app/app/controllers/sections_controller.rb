class SectionsController < ApplicationController
    def new
        @section = Section.new
    end

    def create
        @section = Section.new(section_params)
       
       unless @section.save!
            flash.now[:errors] = @section.errors.full_messages
        end
        redirect_to sections_url(@section)
    end

    def index
        @sections = Section.all
    end

    def show
        @section = Section.find(params[:id])
    end

    def edit
        @section = Section.find(params[:id])
    end

    def update
        @section = Section.find(params[:id])
        if @section.update_attributes(section_params)
            redirect_to section_url(@section)
        else
            flash.now[:errors] = @section.errors.full_messages
            redirect_to section_url(@section)
        end
    end

    def destroy
        @section = Section.find(params[:id])
        @section.destroy
        redirect_to sections_url(@section)
    end

    private
    def section_params
        params.require(:section).permit(:name, :quantity)
    end
end
