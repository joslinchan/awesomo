class InspirationCollectionSerializer < ActiveModel::Serializer
  attributes( 
    :id,
    :title,
    :image_url,
    :url
  )

  belongs_to(:user, key: :collector)
end
