class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_user!

  def current
    render json: current_user
  end
end
