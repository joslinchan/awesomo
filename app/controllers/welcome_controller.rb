class WelcomeController < ApplicationController

  def index

    @paletteCollection = SearchApi.new.search_palettes params[:query]
    @colourCollection = SearchApi.new.search_colours params[:query]
    @patternCollection = SearchApi.new.search_patterns params[:query]
    
    saveTerm = SearchTerm.create(
      term: params[:query]
      ) 
  end
  
end
