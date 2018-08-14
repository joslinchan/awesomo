Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :inspirations, only: [:index, :create, :destroy]
      resources :searches, only: [:index]
      resources :users, only: [] do
        get :current, on: :collection
      end
      resource :session, only: [:create, :destroy]
    end
  end


  resources :users, only: [:new, :create, :edit, :update] do
    resources :inspirations, shallow: true, only: [:create, :destroy, :index]
  end

  get('/users/:id/edit_password', {to: 'users#edit_password', as: :edit_password})
  patch('/users/:id/update_password', {to: 'users#update_password', as: :update_password})

  resource :session, only: [:new, :create, :destroy]

  get('/', {to: 'home#index', as: 'home'}) 
  match "*unmatched_route", via: :all, to: "home#index"

  

end
