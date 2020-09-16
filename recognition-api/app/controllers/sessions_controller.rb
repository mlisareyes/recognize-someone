class SessionsController < ApplicationController #AKA authentication_controller

  def create #login
    @user = User.find_by(:email => params[:user][:email])
    if @user && @user.authenticate(params[:user][:password]) #if the login was successful
      created_jwt = issue_token({id: @user.id}) #then generate a token
      cookies.signed[:jwt] = {value: created_jwt, httponly: true, expires: 1.hour.from_now}
      render json: UserSerializer.new(@user).serialized_json #to return serialized JSON
    else
      render json: {
        error: "Username/Password is incorrect. Please try again."
      }, status: 404
    end
  end

  def get_current_user
  end

  def destroy
    cookies.delete(:jwt)

    render json: {
      message: "Successfully logged out"
    }
  end
end
