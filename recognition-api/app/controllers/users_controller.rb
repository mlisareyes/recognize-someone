class UsersController < ApplicationController
  before_action :authenicate_user, only: [:show]

  def index
    @users = User.all
    render json: UserSerializer.new(@users).serialized_json
  end

  def create #signup
    @user = User.new(user_params)

    if @user.save
      created_jwt = issue_token({id: user.id})
      cookies.signed[:jwt] = {value:  created_jwt, httponly: true, expires: 1.hour.from_now}
      render json: UserSerializer.new(@users).serialized_json
    else
      render json: {error: "User does not exist"}
    end
  end

  def show
    # @user = User.find_by_id(params[:id])
    @user = current_user
    #render error if !@user
    render json: UserSerializer.new(@users).serialized_json
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
