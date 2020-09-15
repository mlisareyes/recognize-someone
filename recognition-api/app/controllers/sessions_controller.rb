class SessionsController < ApplicationController

  def create #login
    @user = User.find_by(:email => params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      created_jwt = issue_token({id: @user.id})
      cookies.signed[:jwt] = {value:  created_jwt, httponly: true, expires: 1.hour.from_now}
      render json: @user
    else
      render json: {error: "User not authenticated"}
    end
  end
end
