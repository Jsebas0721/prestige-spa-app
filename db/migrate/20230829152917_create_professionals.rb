class CreateProfessionals < ActiveRecord::Migration[6.1]
  def change
    create_table :professionals do |t|
      t.string :name
      t.string :gender
      t.string :about
      t.string :service_type
      t.integer :service_id

      t.timestamps
    end
  end
end
