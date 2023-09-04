class RemoveDateTimeFromAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :date_time, :string
  end
end
