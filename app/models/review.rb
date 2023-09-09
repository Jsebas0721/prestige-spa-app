class Review < ApplicationRecord
    belongs_to :user
    belongs_to :professional
    
    validates :comment, presence: true
end
