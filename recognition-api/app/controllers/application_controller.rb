class ApplicationController < ActionController::API
  include ::ActionController::Cookies #this is to access the cookies method to set, get, and delete HTTPOnly Cookies

  def current_user
  end

  def logged_in?
  end

  def issue_token(payload)
    JWT.encode(payload, "$up3r $ecr3t")
  end

  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_jwt(jwt)
  end

  def user_serializer(user)
  end
end
