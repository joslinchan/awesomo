class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_reference :colour_palettes, :search_term, index: true, foreign_key: true
  end
end
