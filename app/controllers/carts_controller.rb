class CartsController < ApplicationController
  def index
    @carts = Cart.all
  end

  def create
    @cart = Cart.create(title: Time.now.strftime('%d-%m-%Y'))
    render json: @cart
  end

  def update
    cart = Cart.find(params[:id])
    cart.title = params[:title]
    cart.save
  end

  def destroy
    cart = Cart.find(params[:id])
    cart.destroy
  end
end
