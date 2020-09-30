class RecognitionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :author, :receiver, :content#, :author_id, :receiver_id
end
