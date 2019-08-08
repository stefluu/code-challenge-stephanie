class BrandsController < ApplicationController
    def new
        @brand = Brand.new
    end

    def create
        @brand = Brand.new(brand_params)
        if @brand.save!
            redirect_to brand_url(@brand)
        else
            flash.now[:errors] = @brand.errors.full_messages
            redirect_to brands_url(@brand)
        end
    end

    def show
        @brand = Brand.find(brand_params)
        if @brand
            render :show
        else
            flash.now[:errors] = @brand.errors.full_messages
            redirect_to brands_url(@brand)
        end
    end

    def index
        @brands = Brand.all
    end

    def edit
        @brand = Brand.find(brand_params)
    end

    def update
        @brand = Brand.find(brand_params)
        if @brand.update_attributes(brand_params)
            redirect_to brand_url(@brand)
        else
            flash.now[:errors] = @brand.errors.full_messages
            redirect_to brand_url(@brand)
        end
    end

    def destroy
        @brand = Brand.find(brand_params)
        @brand.destroy
        redirect_to brands_url(@brand)
    end

    private
    def brand_params
        params.require(:brand).permit(:name)
    end

end
