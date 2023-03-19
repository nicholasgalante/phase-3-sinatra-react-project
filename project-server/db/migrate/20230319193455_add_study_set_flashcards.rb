class AddStudySetFlashcards < ActiveRecord::Migration[6.1]
  def change
    add_column :flashcards, :study_set_id, :integer
  end
end
