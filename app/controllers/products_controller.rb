class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    @product = Product.create(product_params)
    render json: @product
  end

  private

  def product_params
    params.require(:product).permit(:name)
  end
end
