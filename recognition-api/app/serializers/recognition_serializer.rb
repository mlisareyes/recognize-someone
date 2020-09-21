class RecognitionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :author, :receiver, :content #remove id ?
end
