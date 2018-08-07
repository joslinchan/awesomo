class ColourPalettesController < ApplicationController

  def create
    singlePalette = SearchApi.new.search_single_palette params[:id]

    save_palette = ColourPalette.new(
      title: singlePalette["title"],
      url: singlePalette["url"],
      image_url: singlePalette["imageUrl"],
      user: current_user
    )  

    if save_palette.save
      flash[:success] = "Palette has been saved"
      redirect_to user_colour_palettes_path(current_user)
    else
      flash[:danger] = "Palette already saved"
      redirect_to home_path
    end
  end

  def index
    @paletteCollection = current_user.colour_palettes
  end

end
