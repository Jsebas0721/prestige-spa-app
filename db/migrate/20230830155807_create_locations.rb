class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :postal_code
      t.string :country
      t.string :phone

      t.timestamps
    end
  end
end
