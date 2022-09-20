class CartsController < ApplicationController
  def index
    @carts = Cart.all
  end

  def create
    @cart = Cart.create
    render json: @cart
  end

  def destroy
    cart = Cart.find(params[:id])
    cart.destroy
  end
end
