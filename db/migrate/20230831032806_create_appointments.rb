class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :service_name
      t.string :service_type
      t.string :date_time
      t.string :duration
      t.string :location
      t.integer :user_id
      t.integer :professional_id

      t.timestamps
    end
  end
end
