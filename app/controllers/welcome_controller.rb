class WelcomeController < ApplicationController

  def initialize
    Unsplash.configure do |config|
      config.application_access_key = Rails.application.credentials.unsplash_access_key
      config.application_secret = Rails.application.credentials.unsplash_secret_key
    end
  end

  def index

    @paletteCollection = SearchApi.new.search_palettes params[:query]
    @colourCollection = SearchApi.new.search_colours params[:query]
    @patternCollection = SearchApi.new.search_patterns params[:query]

    @photos = Unsplash::Photo.search("cats")
    
    saveTerm = SearchTerm.new(
      term: params[:query]
      ) 
    if saveTerm.save
      flash[:success] = "Search Term saved"
    else
    end 

    render json: @photos
    
  end
  
end
