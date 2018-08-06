class RemoveUserFromSearching < ActiveRecord::Migration[5.2]
  def change
    remove_reference :searchings, :user, index: true, foreign_key: true
  end
end
