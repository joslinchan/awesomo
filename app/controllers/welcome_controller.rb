class WelcomeController < ApplicationController

  def index
    @palettes = ColourRetriever.new.parse_palettes
    @paletteCollection= @palettes["palettes"]["palette"]
    #render json: @paletteCollection
    
  end
  
end
