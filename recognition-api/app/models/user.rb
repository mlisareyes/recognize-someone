class User < ApplicationRecord
  has_secure_password
  has_many :sent_recognitions, class_name: "Recognition", foreign_key: "author_id"
  has_many :received_recognitions, class_name: "Recognition", foreign_key: "receiver_id"

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true
end
