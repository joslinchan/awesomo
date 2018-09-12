Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :inspirations, only: [:index, :create, :destroy] do
        get :search, on: :collection
      end
      resources :users, only: [:create] do
        get :current, on: :collection
      end
      resource :session, only: [:create, :destroy]
    end
  end

  get('/', {to: 'home#index', as: 'home'}) 
  match "*unmatched_route", via: :all, to: "home#index"

end
