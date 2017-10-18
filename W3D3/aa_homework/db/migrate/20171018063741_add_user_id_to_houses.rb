class AddUserIdToHouses < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :person_id, :integer
  end
end
