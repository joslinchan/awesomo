class UnsplashApiRetriever

  def initialize
    Unsplash.configure do |config|
      config.application_access_key = ENV[:unsplash_access_key] ||Rails.application.credentials[:unsplash_access_key]
      config.application_secret = ENV[:unsplash_secret_key] ||Rails.application.credentials[:unsplash_secret_key]
      config.utm_source = "awesomo_client_app"
    end
  end

  def get_photos(search_term)
    Unsplash::Photo.search(search_term)
  end
    
  def get_random
    Unsplash::Photo.curated
  end
end
