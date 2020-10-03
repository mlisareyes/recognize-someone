class RecognitionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content
  belongs_to :author, class_name: "User"
  belongs_to :receiver, class_name: "User"
end
