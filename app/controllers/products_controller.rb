class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    @product = Product.create(product_params)
    render json: @product
  end

  def update
    product = Product.find(params[:id])
    product.done = !product.done
    product.save
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
  end

  private

  def product_params
    params.require(:product).permit(:name, :cart_id)
  end
end
