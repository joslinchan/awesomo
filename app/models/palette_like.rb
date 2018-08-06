class PaletteLike < ApplicationRecord
  belongs_to :user
  belongs_to :colour_palette

  validates :colour_palette_id, uniqueness: {scope: :user_id}
end
