class Api::V1::CartsController < ActionController::Base
  def index
    @carts = Cart.order(created_at: :desc)
    render json: @carts
  end
end
