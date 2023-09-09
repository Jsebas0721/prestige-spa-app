class User < ApplicationRecord
    has_secure_password

    has_many :appointments
    has_many :professionals, through: :appointments
    
    has_many :reviews


    validates :username, presence: true, uniqueness: true
    # validates :password, length: { minimum: 8 }
end
