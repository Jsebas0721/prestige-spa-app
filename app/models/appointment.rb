class Appointment < ApplicationRecord
    belongs_to :user
    belongs_to :professional
    
    has_one :review

    validates :service_name, :service_type, :date, :time, :duration, :location, presence: true
end
