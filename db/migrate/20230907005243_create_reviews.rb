class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.string :date
      t.integer :user_id
      t.integer :professional_id
      t.integer :appointment_id

      t.timestamps
    end
  end
end
