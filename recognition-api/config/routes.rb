Rails.application.routes.draw do
  resources :recognitions
  resources :users, only: [:create, :index, :show]

  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
