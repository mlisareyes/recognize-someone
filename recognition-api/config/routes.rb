Rails.application.routes.draw do
  resources :recognitions
  resources :users, only: [:create, :index, :show]

  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  get '/currentuser' => 'sessions#get_current_user'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
