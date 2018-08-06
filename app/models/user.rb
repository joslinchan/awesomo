class User < ApplicationRecord
  has_secure_password
  has_many :searchings, dependent: :destroy
  has_many :search_terms, through: :searchings, source: :search_term

  attr_accessor :current_password, :new_password, :new_password_confirmation

  validates :first_name, :last_name, presence: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
end
