class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :service_name, :service_type, :duration, :location, :user_id, :professional_id, :date, :time, :cost 

  belongs_to :professional
end
