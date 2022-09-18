Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  resources :products
  resources :carts

# API routing
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :carts, only: [ :index ]
      resources :products, only: [ :index ]
    end
  end
end
