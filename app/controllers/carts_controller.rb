class CartsController < ApplicationController
  def index
    @carts = Cart.all
  end

  def create
    @cart = Cart.create
    render json: @cart
  end
end
