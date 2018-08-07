class PatternsController < ApplicationController

  def create
    singlePattern = SearchApi.new.search_single_pattern params[:id]

    save_pattern = Pattern.new(
      title: singlePattern["title"],
      url: singlePattern["url"],
      image_url: singlePattern["imageUrl"],
      user: current_user
    )  

    if save_pattern.save
      flash[:success] = "Pattern has been saved"
      redirect_to user_patterns_path(current_user)
    else
      flash[:danger] = "Pattern already saved"
      redirect_to home_path
    end
  end

  def destroy
    pattern = Pattern.find params[:id]
    pattern.destroy
    redirect_to user_patterns_path(current_user)
  end

  def index
    @patternCollection = current_user.patterns
  end

end
