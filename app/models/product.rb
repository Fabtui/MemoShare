class Product < ApplicationRecord
  belongs_to :cart
  validates :name, presence: true, uniqueness: { scope: :cart_id }
end
