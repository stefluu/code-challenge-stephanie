class BrandsController < ApplicationController
    def new
        @brand = Brand.new
    end

    def create
        begin
            @brand = Brand.new(brand_params)
            if @brand.save!
                redirect_to brand_url(@brand)
            end
        rescue
            flash.now[:errors] = @brand.errors.full_messages
            redirect_to brands_url(@brand)
        end
    end

    def show
        begin
            @brand = Brand.find(params[:id])
        rescue
            ActiveRecord::RecordNotFound
            redirect_to brands_url()
        end
    end

    def index
        @brands = Brand.all
    end

    def edit
        @brand = Brand.find(params[:id])
    end

    def update
        @brand = Brand.find(params[:id])
        if @brand.update_attributes(brand_params)
            redirect_to brand_url(@brand)
        else
            flash.now[:errors] = @brand.errors.full_messages
            redirect_to brand_url(@brand)
        end
    end

    def destroy
        @brand = Brand.find(params[:id])
        @brand.destroy
        redirect_to brands_url(@brand)
    end

    private
    def brand_params
        params.require(:brand).permit(:name)
    end

end
