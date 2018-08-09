class Api::V1::InspirationsController < Api::ApplicationController
  def index
    inspirations = Inspiration.order(created_at: :DESC)
    render json: inspirations
  end

  def show
    render json: inspiration
  end

  def create
    inspiration = Inspiration.new inspiration_params
    inspiration.user = current_user

    if inspiration.save
      render(
        json: {id: inspiration.id}
      )
    else
      render(
        json: {errors: inspiration.errors},
        status: 422
      )
    end
  end

  def destroy
    inspiration.destroy
    render(
      json: {status: 200},
      status: 200
    )
  end

  private
  def inspiration
    @inspiration ||= Inspiration.find params[:id]
  end

  def inspiration_params
    params.require(:inspiration).permit(:title, :image_url, :url, :hex)
  end
end
