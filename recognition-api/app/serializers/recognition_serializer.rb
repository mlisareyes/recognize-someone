class RecognitionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :receiver, :content, :author
  # attribute :created_at.strftime("%A, %B")

  belongs_to :author, record_type: :user
  belongs_to :receiver, record_type: :user
end
