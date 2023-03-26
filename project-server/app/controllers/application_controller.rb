class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/study_sets" do
    StudySet.all.to_json(include: :flashcards)
  end

  get "/flashcards" do
    Flashcard.all.to_json
  end

  post "/flashcards" do
    flashcard = Flashard.create(
      title: params[:title],
      content: params[:content],
      study_set_id: params[:study_set_id],
    )
    flashcard.to_json
  end

  get "/study_sets/:id" do
    StudySet.find(params[:id]).to_json(include: :flashcards)
  end
end

# post '/messages' do
#   message = Message.create(
#     body: params[:body],
#     username: params[:username]
#   )
#   message.to_json
# end
