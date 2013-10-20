class CreateNotesTable < ActiveRecord::Migration

  def up
    create_table :notes do |t|
      t.string :title
      t.string :content
      t.timestamps
    end
  end

  def down
    drop_table :notes
  end
end