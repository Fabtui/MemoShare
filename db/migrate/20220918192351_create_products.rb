class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.boolean :done, null: false, default: false
      t.references :cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
