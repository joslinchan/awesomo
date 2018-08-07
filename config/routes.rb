Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get('/', {to: 'welcome#index', as: 'home'})

  resources :search_terms, only: [:create]

  resources :users, only: [:new, :create, :edit, :update] do
    resources :colour_palettes, shallow: true, only: [:create, :destroy, :index]
    resources :colours, shallow: true, only: [:create, :destroy, :index]
    resources :patterns, shallow: true, only: [:create, :destroy, :index]
  end
  
  resources :colour_palettes, only: [:create] do
    resources :palette_likes, only: [:create]
  end

  get('/users/:id/edit_password', {to: 'users#edit_password', as: :edit_password})
  patch('/users/:id/update_password', {to: 'users#update_password', as: :update_password})

  resource :session, only: [:new, :create, :destroy]

  

end
