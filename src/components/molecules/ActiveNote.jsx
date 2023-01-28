import React, { Component } from "react";
import CardNote from "../atom/CardNote";
import EmptyMessage from "../atom/EmptyMessage";

export class ActiveNote extends Component {
  render() {
    const dataNotes = this.props.dataNotes;
    const dataNotesActive = dataNotes.filter((note) => {
      return note.archived === false;
    });
    const onDelete = this.props.onDelete;
    const onArchive = this.props.onArchive;

    return (
      <>
        <h2>Active Note</h2>
        {dataNotesActive.length > 0 ? (
          <div className="active-note">
            {dataNotesActive.map((note) => (
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

export default ActiveNote;
