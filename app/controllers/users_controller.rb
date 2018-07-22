class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      flash[:success] = "Thank you #{@user.first_name} for signing up with Awesomo. Your account has been created."
      redirect_to home_path
    else 
      flash[:danger] = "Your account was not created. Please try again."
      render :new
    end
  end

  private
  def user_params
    params.require(:user)
      .permit(
      :first_name, 
      :last_name, 
      :email,
      :password,
      :password_confirmation
    )
  end

end
