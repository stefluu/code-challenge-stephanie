class SectionsController < ApplicationController
    def new
        @section = Section.new
    end

    def create
        begin
            @section = Section.new(section_params)
        
            if @section.save!
                redirect_to section_url(@section)
            end
        rescue
            flash.now[:errors] = @section.errors.full_messages
            redirect_to sections_url(@section)
        end
    end

    def index
        @sections = Section.all
    end

    def show
        begin
            @section = Section.find(params[:id])
        rescue
            ActiveRecord::RecordNotFound
            redirect_to sections_url()
        end
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
        params.require(:section).permit(:name, :shelf_id)
    end
end
