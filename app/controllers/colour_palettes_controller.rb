class ColourPalettesController < ApplicationController

  def create
    singlePalette = SearchApi.new.search_single_palette params[:id]

    save_palette = ColourPalette.create(
      title: singlePalette["title"],
      url: singlePalette["url"],
      image_url: singlePalette["imageUrl"],
      user: current_user
    )  

    render json: save_palette
  end

  def index
    @paletteCollection = current_user.colour_palettes
  end
end
