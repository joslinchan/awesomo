class ColoursController < ApplicationController
  def create
    singleColour = SearchApi.new.search_single_colour params[:id]

    save_colour = Colour.new(
      title: singleColour["title"],
      url: singleColour["url"],
      image_url: singleColour["imageUrl"],
      user: current_user
    )  

    if save_colour.save
      flash[:success] = "Colour has been saved"
      redirect_to user_colours_path(current_user)
    else
      flash[:danger] = "Colour already saved"
      redirect_to home_path
    end

  end

  def index
    @colourCollection = current_user.colours
  end
end
