class AddPictureToProffesional < ActiveRecord::Migration[6.1]
  def change
    add_column :professionals, :picture, :string
  end
end
