import React, { Component } from "react";
import CardNote from "../../atom/na/CardNote";
import EmptyMessage from "../../atom/EmptyMessage";

export class ListNote extends Component {
  render() {
    const dataNotes = this.props.dataNotes;
    const dataNotesActive = dataNotes.filter((note) => {
      return note.archived === false;
    });
    const onDelete = this.props.onDelete;
    const onArchive = this.props.onArchive;

    return (
      <>
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

export default ListNote;
