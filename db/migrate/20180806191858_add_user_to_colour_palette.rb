class AddUserToColourPalette < ActiveRecord::Migration[5.2]
  def change
    add_reference :colour_palettes, :user, foreign_key: true
  end
end
