class RecognitionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :author, :receiver
  # attribute :created_at.strftime("%A, %B")

  # belongs_to :author, record_type: :user
  # belongs_to :receiver, record_type: :user
  belongs_to :author
  belongs_to :receiver
end
