class WelcomeController < ApplicationController

  def index
    @palettes = ColourRetriever.new.parse_palettes
    render json: @palettes
    
  end
  
end
