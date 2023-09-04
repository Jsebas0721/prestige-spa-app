class AddCostToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :cost, :string
  end
end
