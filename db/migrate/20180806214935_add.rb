class Add < ActiveRecord::Migration[5.2]
  def change
    add_reference :searchings, :colour_palette, index: true, foreign_key: true
  end
end
