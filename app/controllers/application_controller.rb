class ApplicationController < ActionController::Base

  private
  def current_user
    if session[:user_id].present?
      @current_user ||= User.find_by(id: session[:user_id])
    end
  end
  helper_method(:current_user)
  
  
end
