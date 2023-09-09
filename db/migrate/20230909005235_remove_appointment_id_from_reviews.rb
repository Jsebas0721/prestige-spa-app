class RemoveAppointmentIdFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :appointment_id, :integer
  end
end
