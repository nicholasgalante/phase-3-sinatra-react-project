class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/study_sets" do
    study_sets = StudySet.all 
    study_sets.to_json
  end

  

end
