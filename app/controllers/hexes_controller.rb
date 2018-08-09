class HexesController < ApplicationController
  def create
    byebug
    Hex.create(
      inspiration: params[:id],
      if params[:hex].is_a? Array
        params[:hex].each do |hex|
          code: hex
        end
      else
        code: params[:hex]
      end
    )
  end
end
