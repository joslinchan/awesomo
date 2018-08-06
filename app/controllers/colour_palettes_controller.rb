class ColourPalettesController < ApplicationController

  def create
    paletteCollection = SearchApi.new.search_palettes params[:query]
    palette = paletteCollection.select{|key, value| key["id"] == params[:id]}   

    saveTerm = SearchTerm.create(
      term: params[:query]
      )

    savePalette = ColourPalette.new(
      title: palette.first["title"],
      url: palette.first["url"],
      image_url: palette.first["imageUrl"]
    )  


    render json: savePalette
  end
end
