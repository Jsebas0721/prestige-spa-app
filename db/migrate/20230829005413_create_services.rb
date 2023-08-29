class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :service_name
      t.string :description
      t.string :duration
      t.string :cost
      t.string :service_type

      t.timestamps
    end
  end
end
