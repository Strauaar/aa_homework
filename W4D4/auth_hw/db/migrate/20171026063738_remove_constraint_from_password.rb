class RemoveConstraintFromPassword < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :password, :string, null: true
  end
end
