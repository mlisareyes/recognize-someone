class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email
  # attributes :sent_recognitions, :received_recognitions
  attribute :full_name do |user|
    "#{user.first_name + " " + user.last_name}"
  end

  has_many :sent_recognitions, record_type: :recognition
  has_many :received_recognitions, record_type: :recognition

end
