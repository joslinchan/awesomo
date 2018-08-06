class SearchTerm < ApplicationRecord
  #validates :term, presence: true, uniqueness: true
  #before_validation :downcase_term

  has_many :searchings, dependent: :destroy
  has_many :users, through: :searchings

  private
=begin   def downcase_term
    self.term.downcase!
  end 
=end
end
