class ColourPalette < ApplicationRecord
  belongs_to :search_term
  validates :image_url, :url, presence: true, uniqueness: true
end
