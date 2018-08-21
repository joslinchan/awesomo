class UnsplashApiRetriever

  def initialize
    Unsplash.configure do |config|
      config.application_access_key = Rails.application.credentials.unsplash_access_key
      config.application_secret = Rails.application.credentials.unsplash_secret_key
      config.utm_source = "awesomo_client_app_project"
    end
  end

  def self.get_photos(search_term)
    Unsplash::Photo.search(search_term)
  end
    
  def self.get_random
    Unsplash::Photo.curated
  end
end
