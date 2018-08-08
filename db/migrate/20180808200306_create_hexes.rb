class CreateHexes < ActiveRecord::Migration[5.2]
  def change
    create_table :hexes do |t|
      t.string :code
      t.references :inspiration, foreign_key: true

      t.timestamps
    end
  end
end
