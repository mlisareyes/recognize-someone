class CreateRecognitions < ActiveRecord::Migration[6.0]
  def change
    create_table :recognitions do |t|
      t.text :content
      t.references :sender
      t.references :receiver

      t.timestamps
    end
  end
end
