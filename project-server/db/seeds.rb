puts "🌱 Seeding..."

Flashcard.delete_all
StudySet.delete_all

intro_to_databases = StudySet.create!(title: "Intro to Databases")
intro_to_active_record = StudySet.create!(title: "Intro to Active Record")
intro_to_active_record_associations = StudySet.create!(title: "Intro to Active Record Associations")

database_questions = Flashcard.create!([
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" }
])

active_record_questions = Flashcard.create!([
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" }
])

active_record_association_questions = Flashcard.create!([
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" },
  { title: "", content: "" }
])

database_questions.each do |question|
   intro_to_databases.flashcards << question
end

intro_to_active_record.each do |question|
   active_record_questions.flashcards << question
end

intro_to_active_record_associations.each do |question|
   active_record_association_questions.flashcards << question
end

puts "✅ Done seeding!"
