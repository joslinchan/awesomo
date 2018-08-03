class WelcomeController < ApplicationController

  def index
    @palettes = ColourRetriever.new.parse_palettes
    @paletteCollection = @palettes["palettes"]["palette"]
    #render json: @paletteCollection
    
    @colours = ColourRetriever.new.parse_colours
    @colourCollection = @colours["colors"]["color"]
    #render json: @colourCollection
  end
  
end
