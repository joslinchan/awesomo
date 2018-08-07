class UnsplashRetriever

  def initialize
    Unsplash.configure do |config|
      config.application_access_key = Rails.application.credentials.unsplash_access_key
      config.application_secret = Rails.application.credentials.unsplash_secret_key
      config.utm_source = "awesomo_client_app"
    end
  end

  def get_photos
    photoArray = Unsplash::Photo.search("cats")
  end

end
