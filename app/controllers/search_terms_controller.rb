class SearchTermsController < ApplicationController
  def create

    saveTerm = SearchTerm.new(
      term: params[:query]
      ) 

    if saveTerm.save
      flash[:success] = "Search Term saved"
      redirect_to home_path
    else
      flash[:danger] = "Search Term already saved"
      redirect_to home_path
    end 
  end

end
