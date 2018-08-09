class Api::V1::InspirationsController < ApplicationController
  def index
    inspirations = Inspiration.order(created_at: :DESC)
    render json: inspirations
  end

  def show
    render json: inspiration
  end

  private
  def inspiration
    @inspiration ||= Inspiration.find params[:id]
  end
end
