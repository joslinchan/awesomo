class WelcomeController < ApplicationController

  def index

    #@palettes = ColourRetriever.new.parse_palettes(searchTerm)
    #@paletteCollection = @palettes["palettes"]["palette"]
    #render json: @paletteCollection
    @paletteCollection = SearchApi.new.search params[:query]
    
    
    #@colours = ColourRetriever.new.parse_colours
    #@colourCollection = @colours["colors"]["color"]
    #render json: @colourCollection

    #@patterns = ColourRetriever.new.parse_patterns
    #@patternCollection = @patterns["patterns"]["pattern"]
    #render json: @patternCollection
  end
  
end
