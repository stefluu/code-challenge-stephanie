Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :shelves, only: [:index, :show]
  resources :sections
  resources :food_items
  resources :brands

  root 'static#root'
end
