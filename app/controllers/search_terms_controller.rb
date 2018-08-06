class SearchTermsController < ApplicationController
  def create
    @term = SearchTerm.new term_params

    if @term.save
      flash[:success] = "Tag created!"
      redirect_to home_path
    else 
      redirect_to home_path
    end

    private
    def term_params
        params.require(:search_term).permit(:term)
    end
end
