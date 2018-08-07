class WelcomeController < ApplicationController

  def index

    @paletteCollection = SearchApi.new.search_palettes params[:query]
    @colourCollection = SearchApi.new.search_colours params[:query]
    @patternCollection = SearchApi.new.search_patterns params[:query]
    
    saveTerm = SearchTerm.new(
      term: params[:query]
      ) 
    if saveTerm.save
      flash[:success] = "Search Term saved"
    else
    end 


    
  end
  
end
