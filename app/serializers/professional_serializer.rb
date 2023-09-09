class ProfessionalSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :about, :service_type, :picture 

  has_many :reviews
 
end
