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
    <>
      <StudySetCreator onAddStudySet={onAddStudySet}/>
      {displayStudySets}
    </>
  );
}

export default StudySetList;
