class CreateFrontpages < ActiveRecord::Migration[5.1]
  def change
    create_table :frontpages do |t|

      t.timestamps
    end
  end
end
