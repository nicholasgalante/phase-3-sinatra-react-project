class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/study_sets" do
    StudySet.all.to_json(include: :flashcards)
  end

  get "/flashcards" do
    Flashcard.all.to_json
  end

  get "/study_sets/:id" do
    StudySet.find(params[:id]).to_json
  end
end
