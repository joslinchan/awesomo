class UserSerializer < ActiveModel::Serializer
  attributes( 
    :id,
    :first_name,
    :last_name,
    :full_name,
    :inspiration_count
  )

  def inspiration_count
    object.inspirations.count
  end
end
