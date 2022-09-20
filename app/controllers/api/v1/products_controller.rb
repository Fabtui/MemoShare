class Api::V1::ProductsController < ActionController::Base
  def index
    @products = Product.order(name: :asc)
    render json: @products
  end
end
