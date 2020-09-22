class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email#remove id ?
  has_many :sent_recognitions
  has_many :received_recognitions
end
