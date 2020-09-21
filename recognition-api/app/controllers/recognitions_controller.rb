class RecognitionsController < ApplicationController

  def index
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def recognition_params
    params.require(:recognition).permit(:user_id, :content)
  end
end
