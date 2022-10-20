class AddTitleToCarts < ActiveRecord::Migration[7.0]
  def change
    add_column :carts, :title, :string
  end
end
