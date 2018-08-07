class CreatePatterns < ActiveRecord::Migration[5.2]
  def change
    create_table :patterns do |t|
      t.string :title
      t.string :image_url
      t.string :url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
