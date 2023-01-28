import React, { Component } from "react";
import ActiveNote from "../molecules/ActiveNote";
import ArchiveNote from "../molecules/ArchiveNote";
import FormNote from "../molecules/FormNote";

export class MainPage extends Component {
  render() {
    const dataNotes = this.props.dataNotes;
    const addNote = this.props.addNote;
    const onDelete = this.props.onDelete;
    const onArchive = this.props.onArchive;
   
    return (
      <main>
        <FormNote addNote={addNote}></FormNote>
        <ActiveNote
          dataNotes={dataNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        ></ActiveNote>
        <ArchiveNote
          dataNotes={dataNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        ></ArchiveNote>
      </main>
    );
  }
}

export default MainPage;
