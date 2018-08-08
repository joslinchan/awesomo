class User < ApplicationRecord
  has_secure_password

  has_many :inspirations, dependent: :destroy

  attr_accessor :current_password, :new_password, :new_password_confirmation

  validates :first_name, :last_name, presence: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates( 
    :email, 
    presence: true, 
    uniqueness: true, 
    format: VALID_EMAIL_REGEX
  )

end
