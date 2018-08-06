class ColourPalette < ApplicationRecord
  belongs_to :user

  has_many :palette_likes, dependent: :destroy
  has_many :palette_likers, through: :palette_likes, source: :user

  has_many :searchings, dependent: :destroy
  has_many :search_terms, through: :searchings

  validates :title, :image_url, :url, presence: true
end
