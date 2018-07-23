class UsersController < ApplicationController

  before_action :find_user, only: [:edit, :update, :edit_password, :update_password]

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

  def edit
  end

  def update
    if @user.update(user_params)
      flash[:success] = "Thanks, #{@user.first_name}. Your profile has been updated"
      render :edit
    else 
      flash[:danger] = "Your profile was not updated. Please try again."
      render :edit
    end
  end

  def edit_password
  end

  def update_password
    if @user&.authenticate(params[:user][:current_password])
      if params[:user][:new_password] == params[:user][:new_password_confirmation] && params[:user][:current_password] != params[:user][:new_password]
        @user.password = params[:user][:new_password]
        if @user.update(password_params)
          flash[:success] = "Thanks, #{@user.first_name}. Your password has been updated"
          redirect_to edit_password_path(@user)
        end
      else
        flash[:danger] = "Your passwords are invalid. No changes made. Please try again."
        redirect_to edit_password_path(@user)
      end
    else
      flash[:danger] = "Your password does not match. No changes made."
      render :edit   
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

  def find_user
    @user = User.find params[:id]
  end

  def password_params
    params.require(:user).permit(
      :current_password,
      :new_password,
      :new_password_confirmation
    )
  end

end
