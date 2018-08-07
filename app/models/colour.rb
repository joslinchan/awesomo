class Colour < ApplicationRecord
  belongs_to :user

  validates :title, :image_url, :url, presence: true, uniqueness: { case_sensitive: false }
end
