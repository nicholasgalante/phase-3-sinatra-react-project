import StudySetCard from "./StudySetCard";

function StudySetList({ studySets, onSelectStudySet }) {
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

  return <>{displayStudySets}</>;
}

export default StudySetList;
