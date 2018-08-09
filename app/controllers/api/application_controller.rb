class Api::ApplicationController < ApplicationController
  skip_befoe_action :verify_authenticity_token
end
