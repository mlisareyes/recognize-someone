class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email

  # has_many :sent_recognitions, class_name: "Recognition"
  # has_many :received_recognitions, class_name: "Recognition"
  has_many :sent_recognitions
  has_many :received_recognitions

end
