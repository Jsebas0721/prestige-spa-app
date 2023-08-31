class Appointment < ApplicationRecord
    belongs_to :user
    belongs_to :professional

    # validates :service_name, :service_type, :date_time, :duration, :location, presence: true
end
