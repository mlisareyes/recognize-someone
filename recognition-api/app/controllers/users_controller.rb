class UsersController < ApplicationController
  def index
    @users = User.all
    ender json: @users
  end

  def create #signup
    @user = User.new(user_params)

    if @user.save
      created_jwt = issue_token({id: user.id})
      cookies.signed[:jwt] = {value:  created_jwt, httponly: true, expires: 1.hour.from_now}
      render json: @user

    else
      render json: {error: "User does not exist"}
    end
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
