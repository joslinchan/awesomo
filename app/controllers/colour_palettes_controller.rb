class ColourPalettesController < ApplicationController

  def create
    paletteCollection = SearchApi.new.search_palettes params[:query]
    palette = paletteCollection.select{|key, value| key["id"] == params[:id]}   

=begin     
      saveTerm = SearchTerm.create(
      term: params[:query]
      ) 
=end

    savePalette = ColourPalette.create(
      title: palette.first["title"],
      url: palette.first["url"],
      image_url: palette.first["imageUrl"],
      user: current_user
    )  


    render json: savePalette
  end
end
