Rails.application.routes.draw do
  resources :frontpages
  root to: "frontpages#index"
  
  get 'test', to: "frontpages#test"
  get 'test2', to: "frontpages#test2"
  get 'test3', to: "frontpages#test3"
  get 'test4', to: "frontpages#test4"
  get 'test5', to: "frontpages#test5"
  get 'test6', to: "frontpages#test6"
  get 'test7', to: "frontpages#test7"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
