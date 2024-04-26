import { createSlice } from '@reduxjs/toolkit';

const initialNotes = JSON.parse(localStorage.getItem('notes')) || [];

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: initialNotes,
  },
  reducers: {
    createNote: (state, action) => {
      const newNote = {
        id: Date.now(),
        text: action.payload,
        date: new Date().toLocaleString(),
      }
      state.notes = [...state.notes, newNote];
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
    updateNote: (state, action) => {
      const { id, text } = action.payload;
      const noteUpdate = state.notes.find(note => note.id === id);
      if (noteUpdate) {
        noteUpdate.text = text;
        noteUpdate.date = new Date();
        localStorage.setItem('notes', JSON.stringify(state.notes));
      }
    },
    deleteNote: (state, action) => {
      const idToDelete = action.payload;
      state.notes = state.notes.filter(note => note.id !== idToDelete);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
  },
});

export const { createNote, updateNote, deleteNote } = noteSlice.actions

export default noteSlice.reducer;