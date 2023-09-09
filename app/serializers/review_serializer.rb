class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :date

  belongs_to :user
end
