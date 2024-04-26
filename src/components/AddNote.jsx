import { useDispatch } from "react-redux"
import { createNote } from "../noteSlice"
import { useState } from "react"

const AddNote = () => {
  const dispatch = useDispatch();

  const [noteText, setNoteText] = useState("");

  const handleSaveClick = () => {
    dispatch(createNote(noteText));
    setNoteText("") // Clear text area after creating new note
  }

  return (
    <div className="">
      <textarea
        onChange={(e) => {
          setNoteText(e.target.value)
        }}
        rows="5"
        cols="8"
        value={noteText}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your note here..."></textarea>
      <button onClick={handleSaveClick} className="bg-transparent hover:bg-blue-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
        Save
      </button>
    </div>
  )
}

export default AddNote;
