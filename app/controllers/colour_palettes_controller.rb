class ColourPalettesController < ApplicationController

  def create

=begin     
    palette = ColourPalette.create(
      title: palette["title"],
      url: palette["url"],
      image_url: palette["imageUrl"]
    ) 
=end
    render json:params
  end
end
