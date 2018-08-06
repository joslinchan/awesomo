class PaletteLike < ApplicationRecord
  belongs_to :user
  belongs_to :colour_palette
end
