module Toyable
  extend ActiveSupport::Concern

  included do
    has_many :toys, as: :toyable
  end

  def receive_toy(name)
    toy = Toy.find_by(name:name)
    toy.update_attributes(toyable_id: self.id, toyable_type: self.class)
  end
end
