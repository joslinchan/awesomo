class CreatePaletteLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :palette_likes do |t|
      t.references :user, foreign_key: true
      t.references :colour_palette, foreign_key: true

      t.timestamps
    end
  end
end
