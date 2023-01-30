import React from "react";
import PropTypes from "prop-types";
import { addNote } from "../../utils/local-data";
import FormNote from "../molecules/FormNote";

function AddPage() {
  function onAddNoteHandler(note) {
    addNote(note);
  }
  return (
    <main>
      <h2>Add Note</h2>
      <FormNote addNote={onAddNoteHandler}></FormNote>
    </main>
  );
}

AddPage.propTypes = {
  getActiveNotes: PropTypes.func,
  notesActive: PropTypes.array,
  dataNotes: PropTypes.array,
};

export default AddPage;
