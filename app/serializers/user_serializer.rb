class UserSerializer < ActiveModel::Serializer
  attributes( 
    :id,
    :first_name,
    :last_name,
    :full_name
  )

  def inspiration_count
    object.inspiration.count
  end
end
