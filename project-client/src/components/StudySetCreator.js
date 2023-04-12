function StudySetCreator() {
  function handleSubmit() {}
  return (
    <>
    Create a New Study Set
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          //  onChange={(e) => onEditField(e)}
          placeholder="Title"
        ></input>
        <button type="submit">Create New Study Set</button>
      </form>
    </>
  );
}

export default StudySetCreator;
