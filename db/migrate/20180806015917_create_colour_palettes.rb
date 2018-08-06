class CreateColourPalettes < ActiveRecord::Migration[5.2]
  def change
    create_table :colour_palettes do |t|
      t.string :title
      t.string :image_url
      t.string :url
      t.references :search_term, foreign_key: true

      t.timestamps
    end
  end
end
