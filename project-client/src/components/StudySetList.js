import StudySetCard from "./StudySetCard";
import StudySetCreator from "./StudySetCreator";

function StudySetList({ studySets, onSelectStudySet, onAddStudySet }) {
  const displayStudySets = studySets.map((set) => {
    return (
      <div key={set.id}>
        <StudySetCard
          set={set}
          studySets={studySets}
          onSelectStudySet={onSelectStudySet}
        />
      </div>
    );
  });

  return (
    <div class="content m-6">
      <div class="mb-6">
      <StudySetCreator onAddStudySet={onAddStudySet}/>
      </div>
      {displayStudySets}
    </div>
  );
}

export default StudySetList;
