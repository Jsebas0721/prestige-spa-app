Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  #user routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/users", to: "users#index"
  patch "/users/:id", to: "users#update"
  
  #session routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #services routes
  get "/services", to: "services#index"

  #professionals routes
  get "/professionals", to: "professionals#index"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
