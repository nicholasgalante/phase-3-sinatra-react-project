class CreateFlashcards < ActiveRecord::Migration[6.1]
  def change
    create_table :flashcards do |t|
      t.string :title
      t.string :content
      t.timestamps
    end
  end
end
