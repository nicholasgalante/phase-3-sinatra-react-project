class CreateStudySets < ActiveRecord::Migration[6.1]
  def change
    create_table :study_sets do |t|
      t.string :title
      t.timestamps
    end
  end
end
