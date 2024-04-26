import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { MdDeleteForever, MdTimer } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import NoteTimer from "./NoteTimer";
import { updateNote } from "../noteSlice";
import { deleteNote } from "../noteSlice";

const Note = ({ id, text, date }) => {
  // Identify the existing text of the note
  const originalText = useSelector((state) => {
    const note = state.notes.notes.find(note => note.id === id);
    return note.text;
  });

  const dispatch = useDispatch()
  const [editedText, setEditedText] = useState(originalText); // Set initial state to the existing note text before editing 
  const [isEditing, setIsEditing] = useState(false);
  const [showTimer, setShowTimer] = useState(false); // Update: added a state to toggle visibility of the timer based on click event on the timer icon

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    dispatch(updateNote({ id: id, text: editedText, date: new Date() })); // Save the edited text and generate new timestamp
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };

  const handleDelete = () => {
    dispatch(deleteNote(id));
    console.log("Deleting note with id:", id);
  };

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  return (
    // Text input area will conditionally render when the edit icon is clicked
    <div className="flex flex-col bg-yellow-200 w-90 h-auto m-2 p-6 rounded-md">
      {isEditing ? (
        <input
          className="p-2"
          type="text"
          defaultValue={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus
          onBlur={handleSave}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <div className="my-4">{text}</div>
      )}

      {/* Note timestamp */}
      <div className="mt-auto">
        {date.toLocaleString()}
      </div>

      {/* Edit icon */}
      <div className="flex flex-row mt-2">
        {!isEditing && (
          <span
            onClick={handleEdit}
            className="mr-4"
            style={{ cursor: "pointer" }}
          >
            <FaEdit />
          </span>
        )}

        {/* Timer icon */}
        <span
          onClick={toggleTimer}
          className="mr-4"
          style={{ cursor: "pointer" }}
        >
          <MdTimer />
        </span>

        {/* Delete icon */}
        <span onClick={handleDelete} style={{ cursor: "pointer" }}>
          <MdDeleteForever />
        </span>
      </div>

      <div className="mt-2 py-2">{showTimer && <NoteTimer />}</div>
    </div>
  );
};

export default Note;
