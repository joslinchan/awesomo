class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_user!, except: [:create]

  def current
    render json: current_user
  end

  def create
    user = User.new user_params
    if user.save
      session[:user_id] = user.id
      render(
        status: 201,
        json: {
          id: user.id
        }
      )
    else
      render(
        status: 422,
        json: {
          status: 422,
          errors: user.errors
        }
      )
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation,
    )
  end
end
