class InspirationSerializer < ActiveModel::Serializer
  attributes( 
    :id,
    :title,
    :image_url,
    :url,
    :created_at,
    :updated_at
  )

  belongs_to(:user, key: :collector)

  class HexSerializer < ActiveModel::Serializer
    attributes(:code)
  end

end
