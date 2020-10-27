class ApplicationController < ActionController::API
  include ::ActionController::Cookies #this is to access the cookies method to set, get, and delete HTTPOnly Cookies

  def current_user
    @current_user ||= User.find_by(id: authenticate_user)
  end

  def logged_in?
    !!current_user
  end

  def issue_token(payload)
    JWT.encode(payload, "$up3r $ecr3t", "HS256")
  end

  def authenticate_user
    jwt = cookies.signed[:jwt]
    JWT.decode(jwt, "$up3r $ecr3t", "HS256")[0]["id"]
  end
end
