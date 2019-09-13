class SectionsController < ApplicationController
    def new
        @section = Section.new
    end

    def create
        
        @section = Section.new(section_params)
    
        if @section.save!
            redirect_to section_url(@section)
        else
            flash[:errors] = @section.errors.full_messages
            redirect_to new_section_url(@section)
        end
    end

    def index
        @sections = Section.all
    end

    def show
        @section = Section.find(params[:id])
        render json: SectionSerializer.new(@section)
    end

    def edit
        @section = Section.find_by_id(params[:id])
    end

    def update
        @section = Section.find_by_id(params[:id])
        if @section.update_attributes(section_params)
            redirect_to section_url(@section)
        else
            flash[:errors] = @section.errors.full_messages
            redirect_to section_url(@section)
        end
    end

    def destroy
        @section = Section.find_by_id(params[:id])
        @section.destroy
        redirect_to sections_url()
    end

    private
    def section_params
        params.require(:section).permit(:name, :shelf_id)
    end
end
