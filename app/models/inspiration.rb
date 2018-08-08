class Inspiration < ApplicationRecord
  belongs_to :user
  has_many :hexes
end
