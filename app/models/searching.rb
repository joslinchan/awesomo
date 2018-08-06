class Searching < ApplicationRecord
  belongs_to :search_term
  belongs_to :user

  validates :user_id, uniqueness: {scope: :user_id}
end
