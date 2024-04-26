import Note from "./Note";
import AddNote from "./AddNote";
import { useSelector } from "react-redux";

const NotesList = () => {
  // Access notes array in noteSlice 
  const notes = useSelector((state) => state.notes.notes);

  // Map the most updated array
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>

  );
};

export default NotesList;
