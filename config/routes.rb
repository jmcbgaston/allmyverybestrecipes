
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [ :create ]
    resource :session, only: [ :create, :destroy ]
    resources :recipes, only: [ :index, :show, :create, :update, :destroy ]
    # resources :ingredients, only: [ :create, :destroy ]
    resources :reviews, only: [ :index, :create, :update, :destroy ]
    resources :shopping_lists, only: [ :show, :update ]
  end

  root to: "static_pages#root"

end
