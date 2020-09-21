class CreateRecognitions < ActiveRecord::Migration[6.0]
  def change
    create_table :recognitions do |t|
      t.string :content
      t.references :author
      t.references :receiver
      
      t.timestamps
    end
  end
end
