import React, { Component } from "react";
import CardNote from "../atom/CardNote";
import EmptyMessage from "../atom/EmptyMessage";

export class ArchiveNote extends Component {
  render() {
    const dataNotes = this.props.dataNotes;
    const dataNotesArchived = dataNotes.filter((note) => {
      return note.archived === true;
    });

    const onDelete = this.props.onDelete;
    const onArchive = this.props.onArchive;

    return (
      <>
        <h2>Archived Note</h2>
        {dataNotesArchived.length > 0 ? (
          <div className="active-note">
            {dataNotesArchived.map((note) => (
              <CardNote
                {...note}
                onDelete={onDelete}
                onArchive={onArchive}
                key={note.id}
              />
            ))}
          </div>
        ) : (
          <EmptyMessage />
        )}
      </>
    );
  }
}

export default ArchiveNote;
