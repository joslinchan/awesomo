class InspirationsController < ApplicationController
  def create
    inspiration = Inspiration.new(
      title: params[:title],
      url: params[:url],
      image_url: params[:image_url],
      user: current_user
    )

    if inspiration.save
      flash[:success] = "Inspiration has been saved"
      redirect_to home_path
    else
      flash[:danger] = "Inspiration already saved"
      redirect_to home_path
    end
  end

  def destroy
    inspiration = Inspiration.find params[:id]
    inspiration.destroy
    redirect_to user_inspirations_path(current_user)
  end

  def index
    @inspireCollection = current_user.inspirations
  end

end
