class Inspiration < ApplicationRecord
  belongs_to :user
  has_many :hexes, dependent: :destroy
  
  validates :image_url, :url, presence: true, uniqueness: { case_sensitive: false }

end
