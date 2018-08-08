class DropSearchTerms < ActiveRecord::Migration[5.2]
  def change
    drop_table :search_terms, force: :cascade do |t|
      t.string :term, null: false

      t.timestamps null: false
    end
  end
end
