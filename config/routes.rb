require_dependency "jsdos_constraint"

Jsdo::Engine.routes.draw do
  get "/" => "jsdos#index", constraints: JsdoConstraint.new
  get "/actions" => "actions#index", constraints: JsdoConstraint.new
  get "/actions/:id" => "actions#show", constraints: JsdoConstraint.new
end
