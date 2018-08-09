class WelcomeController < ApplicationController

  def index
    paletteCollection = SearchApi.new.search_palettes params[:query]
    colourCollection = SearchApi.new.search_colours params[:query]
    patternCollection = SearchApi.new.search_patterns params[:query]

    if params[:query]
      photos = UnsplashRetriever.new.get_photos params[:query]
    else
      photos = UnsplashRetriever.new.get_random
    end
    
    @everything = paletteCollection + colourCollection + patternCollection + photos

  end
  
end
