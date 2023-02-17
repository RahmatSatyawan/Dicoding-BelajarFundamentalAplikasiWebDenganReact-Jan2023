import React from "react";
import { addNote } from "../../utils/local-data";
import FormNote from "../molecules/FormNote";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <main>
      <h2>Add Note</h2>
      <FormNote addNote={onAddNoteHandler}></FormNote>
    </main>
  );
}

export default AddPage;
