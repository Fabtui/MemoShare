class Api::V1::ProductsController < ActionController::Base
  def index
    @products = Product.order(name: :desc)
    render json: @products
  end
end
