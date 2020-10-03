class RecognitionsController < ApplicationController

  def index
    @recognitions = Recognition.all

    render json: RecognitionSerializer.new(@recognitions).serialized_json
  end

  def create
    @recognition = Recognition.new(recognition_params)

    if @recognition.save
      render json: RecognitionSerializer.new(@recognition).serialized_json
    else
      render json: {error: "Recognition not created"}
    end
  end

  def show
    @recognition = Recognition.find(params[:id])
    render json: RecognitionSerializer.new(recognition).serialized_json
  end

  def update
  end

  def destroy
  end

  private

  def recognition_params
    params.require(:recognition).permit(:receiver_id, :content, :author_id)
  end
end
