Rails.application.routes.draw do
  root "homes#top"
  get 'homes/top'
  get 'homes/about', as: :about
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
