class Api::V1::SessionsController < Api::ApplicationController

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        id: user.id,
        message: "Session created"
      }
    else
      render(
        status: 404,
        json: {status: 404}
      )
    end
  end

  def destroy
    session[:user_id] = nil
    render(
      status: 200,
      json: {
        status: 200,
        message: "Session destroyed"
      }
    )
  end
end
