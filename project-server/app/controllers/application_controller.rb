class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/study_sets" do
    study_sets = StudySet.all 
    study_sets.to_json
  end

  get "/flashcards" do
    flashcards = Flashcard.all 
    flashcards.to_json
  end

  get "/study_sets/:id" do
    study_set = StudySet.find(params[:id])
    study_set.to_json
  end

end
