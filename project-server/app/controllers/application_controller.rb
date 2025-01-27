class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/study_sets" do
    StudySet.all.to_json(include: :flashcards)
  end

  get "/flashcards" do
    Flashcard.all.to_json
  end

  get "/flashcards/:id" do
    Flashcard.find(params[:id]).to_json
  end

  post "/flashcards" do
    Flashcard.create(
      title: params[:title],
      content: params[:content],
      study_set_id: params[:study_set_id],
    ).to_json
  end

  patch "/flashcards/:id" do
    flashcard = Flashcard.find(params[:id])
    flashcard.update(title: params[:title], content: params[:content])
    flashcard.to_json
  end

  post "/study_sets" do
    StudySet.create(title: params[:title]).to_json
  end

  get "/study_sets/:id" do
    StudySet.find(params[:id]).to_json(include: :flashcards)
  end

  delete "/study_sets/:id" do
    StudySet.find(params[:id]).destroy.to_json
  end

  delete "/flashcards/:id" do
    Flashcard.find(params[:id]).destroy.to_json
  end
end
