class ColourPalettesController < ApplicationController

  def create
    singlePalette = SearchApi.new.search_single_palette params[:id]

    savePalette = ColourPalette.create(
      title: singlePalette["title"],
      url: singlePalette["url"],
      image_url: singlePalette["imageUrl"],
      user: current_user
    )  

    render json: savePalette
  end
end
