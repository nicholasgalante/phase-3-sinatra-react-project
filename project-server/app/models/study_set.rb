class StudySet < ActiveRecord::Base
   has_many :flashcards


   def flashcard_count
      self.flashcards.count
   end

end