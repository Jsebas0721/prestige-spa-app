class Appointment < ApplicationRecord
    belongs_to :user
    belongs_to :professional
    
    has_one :review

    validate :date_must_be_in_the_future, :time_must_be_between_8_am_and_6_pm
    validates :service_name, :service_type, :date, :time, :duration, :location, presence: true
    
    

    def date_must_be_in_the_future
        if date.present? && date <= Date.today.to_s
            errors.add(:date, "has to be in the future.")
        end
    end

    def time_must_be_between_8_am_and_6_pm
        appointment_time = Time.zone.parse(time)
        if time.present? && (appointment_time < Time.zone.parse("08:00") || appointment_time > Time.zone.parse("18:00"))
            errors.add(:time, "must be between 8 am and 6 pm")
        end
    end

end
